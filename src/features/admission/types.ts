export interface AdmissionStep {
  order: number;
  title: string;
  description: string;
  locationLabel: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface AdmissionProcedure {
  steps: AdmissionStep[];
  documentsRequired: string[];
  faqs: Faq[];
}
