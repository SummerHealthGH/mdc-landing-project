export type TrainingItem = {
  title: string;
  description: string;
  type: "guideline" | "registration";
  pdf?: string;
  link?: string;
};

export type TrainingSection = {
  id: string;
  title: string;
  items: TrainingItem[];
};

export const educationTrainingData: TrainingSection[] = [
  {
    id: "education",
    title: "Education",
    items: [
      {
        title: "Registration and Examinations",
        description:
          "Our registration and examination programs ensure that medical and dental professionals meet the highest standards of competency and professional practice.",
        type: "registration",
        link: "/registration",
      },
      {
        title: "PA Licentiate Exams",
        description:
          "Physician Assistant Licentiate examination programs designed to validate the knowledge and skills of PA professionals.",
        type: "guideline",
        pdf: "/pdfs/pa-licentiate-guidelines.pdf",
      },
      {
        title: "Exams Visitation",
        description:
          "Regular visitation and monitoring of examination centers to ensure quality and compliance with standards.",
        type: "guideline",
        pdf: "/pdfs/exams-visitation-guidelines.pdf",
      },
    ],
  },
  {
    id: "housemanship",
    title: "Housemanship / Internship",
    items: [
      {
        title: "Housemanship Medical and Dental Officers",
        description:
          "Structured housemanship programs for newly graduated medical and dental officers to gain practical experience under supervision.",
        type: "guideline",
        pdf: "/pdfs/housemanship-guidelines.pdf",
      },
      {
        title: "Internship PAs and CRAs",
        description:
          "Internship programs for Physician Assistants and Clinical Research Associates to develop practical competencies.",
        type: "registration",
        link: "/registration/internship",
      },
    ],
  },
  {
    id: "cpd",
    title: "Continuing Professional Development (CPD)",
    items: [
      {
        title: "CPD Policies",
        description:
          "Guidelines and policies governing continuing professional development requirements for medical and dental professionals.",
        type: "guideline",
        pdf: "/pdfs/cpd-policies.pdf",
      },
      {
        title: "Accredited CPD Providers",
        description:
          "List of approved providers offering accredited continuing professional development courses and programs.",
        type: "guideline",
        pdf: "/pdfs/accredited-cpd-providers.pdf",
      },
    ],
  },
  {
    id: "training",
    title: "Accredited Training Institution",
    items: [
      {
        title: "Medical and Dental Training Schools",
        description:
          "Accredited medical and dental training institutions recognized by the MDC for quality education delivery.",
        type: "guideline",
        pdf: "/pdfs/medical-dental-training-schools.pdf",
      },
      {
        title: "PAs and CRA Training Schools",
        description:
          "Accredited institutions providing training programs for Physician Assistants and Clinical Research Associates.",
        type: "guideline",
        pdf: "/pdfs/pas-cra-training-schools.pdf",
      },
    ],
  },
];
