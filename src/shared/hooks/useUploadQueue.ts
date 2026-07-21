import { useState, useCallback, useEffect } from 'react';
import type { UploadItem } from '../components/MultiImageUploader/types';

export function useUploadQueue(
  uploadFn: (file: File) => Promise<{ url: string; publicId: string }>,
  onComplete: (results: { url: string; publicId: string }[]) => void,
  existingImages: { url: string; publicId: string }[]
) {
  const [items, setItems] = useState<UploadItem[]>([]);
  const [finalImages, setFinalImages] = useState<{ url: string; publicId: string }[]>(existingImages);
  const [isProcessingQueue, setIsProcessingQueue] = useState(false);

  // Clean up object URLs on unmount or item removal
  useEffect(() => {
    return () => {
      items.forEach((item) => {
        if (item.previewUrl && !item.previewUrl.startsWith('http')) {
          URL.revokeObjectURL(item.previewUrl);
        }
      });
    };
  }, [items]);

  const checkCompletion = useCallback(
    (currentItems: UploadItem[]) => {
      const isDone = currentItems.every((item) => item.status === 'success' || item.status === 'failed');
      if (isDone) {
        const successfulUploads = currentItems
          .filter((item) => item.status === 'success' && item.result)
          .map((item) => item.result!);
        onComplete([...finalImages, ...successfulUploads]);
      }
    },
    [finalImages, onComplete]
  );

  const processQueue = useCallback(async () => {
    if (isProcessingQueue) return;
    setIsProcessingQueue(true);

    let hasChanges = false;
    const currentItems = [...items];

    for (const item of currentItems) {
      if (item.status === 'pending') {
        hasChanges = true;
        setItems((prev) => prev.map((p): UploadItem => (p.id === item.id ? { ...p, status: 'uploading' } : p)));

        try {
          const result = await uploadFn(item.file);
          setItems((prev) => prev.map((p): UploadItem => (p.id === item.id ? { ...p, status: 'success', result } : p)));
        } catch (error) {
          setItems((prev) =>
            prev.map((p): UploadItem =>
              p.id === item.id
                ? {
                    ...p,
                    status: 'failed',
                    errorMessage: error instanceof Error ? error.message : 'Upload failed',
                  }
                : p
            )
          );
        }
      }
    }

    setIsProcessingQueue(false);
    if (hasChanges) {
      setItems((prev) => {
        checkCompletion(prev);
        return prev;
      });
    }
  }, [items, isProcessingQueue, uploadFn, checkCompletion]);

  useEffect(() => {
    const hasPending = items.some((item) => item.status === 'pending');
    if (hasPending && !isProcessingQueue) {
      void processQueue();
    }
  }, [items, isProcessingQueue, processQueue]);

  const handleRetry = useCallback((id: string) => {
    setItems((prev) => prev.map((item): UploadItem => {
      if (item.id === id) {
        const { errorMessage, ...rest } = item;
        return { ...rest, status: 'pending' };
      }
      return item;
    }));
  }, []);

  const handleRemoveExisting = useCallback(
    (publicId: string) => {
      const updated = finalImages.filter((img) => img.publicId !== publicId);
      setFinalImages(updated);
      const isUploading = items.some((i) => i.status === 'pending' || i.status === 'uploading');
      if (!isUploading) {
        const successfulUploads = items
          .filter((item) => item.status === 'success' && item.result)
          .map((item) => item.result!);
        onComplete([...updated, ...successfulUploads]);
      }
    },
    [finalImages, items, onComplete]
  );

  const handleRemoveNew = useCallback(
    (id: string) => {
      setItems((prev) => {
        const updated = prev.filter((item) => item.id !== id);
        const removed = prev.find((i) => i.id === id);
        if (removed && removed.previewUrl) {
          URL.revokeObjectURL(removed.previewUrl);
        }
        checkCompletion(updated);
        return updated;
      });
    },
    [checkCompletion]
  );

  const addItems = useCallback((newItems: UploadItem[]) => {
    setItems((prev) => [...prev, ...newItems]);
  }, []);

  return {
    items,
    finalImages,
    addItems,
    handleRetry,
    handleRemoveExisting,
    handleRemoveNew,
  };
}
