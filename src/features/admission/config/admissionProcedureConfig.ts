import type { AdmissionProcedure } from '../types';

export const admissionProcedureConfig: AdmissionProcedure = {
  steps: [
    {
      order: 1,
      title: 'Registration',
      description: 'Fill out the online registration form with basic details.',
      locationLabel: 'At School',
    },
    {
      order: 2,
      title: 'Document Submission',
      description: 'Submit the required documents for verification.',
      locationLabel: 'At School',
    },
    {
      order: 3,
      title: 'Entrance Test',
      description: 'Students appear for an age-appropriate entrance assessment.',
      locationLabel: 'At School',
    },
    {
      order: 4,
      title: 'Interaction / Interview',
      description: 'An interaction session with the student and parents is conducted.',
      locationLabel: 'At School',
    },
    {
      order: 5,
      title: 'Admission Confirmation',
      description: 'Upon selection, complete the fee payment to confirm the admission.',
      locationLabel: 'Online / At School',
    },
  ],
  documentsRequired: [
    'Duly filled Registration Form',
    'Copy of Birth Certificate',
    'Passport Size Photographs (2)',
    'Previous School Report Card',
    'Aadhaar Card Copy',
    'Address Proof',
    'Transfer Certificate (if applicable)',
  ],
  faqs: [
    {
      question: 'What is the age criteria for admission?',
      answer: 'Age criteria varies by class. Please refer to the class-wise age chart available at the school office, or contact us directly for specific eligibility details.',
    },
    {
      question: 'Is entrance test mandatory for all classes?',
      answer: 'The entrance test is mandatory for admission to Class II and above. Nursery to Class I admissions are based on an interaction session only.',
    },
    {
      question: 'Can I apply for multiple classes?',
      answer: "No — applications can only be submitted for one class per academic year, based on the child's age eligibility.",
    },
    {
      question: 'When will I know the result?',
      answer: 'Results are typically announced within 7-10 working days after the entrance test or interaction, and communicated via phone or email.',
    },
    {
      question: 'What is the mode of fee payment?',
      answer: "Fees can be paid online through the admission portal, or offline at the school's accounts office via cash, cheque, or card.",
    },
  ],
};
