import React, { createContext, useContext, useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  program: string;
  experience: string;
  motivation: string;
}

interface FormErrors {
  [key: string]: string;
}

interface FormContextType {
  formData: FormData;
  errors: FormErrors;
  formStep: number;
  setFormStep: React.Dispatch<React.SetStateAction<number>>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (name: string, value: string) => void;
  validateStep: (step: number) => boolean;
  handleNextStep: () => void;
  handlePrevStep: () => void;
  handleSubmitApplication: (e: React.FormEvent) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [formStep, setFormStep] = useState(1);
  const { toast } = useToast();
  const [errors, setErrors] = useState<FormErrors>({});
  
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    program: "",
    experience: "",
    motivation: ""
  });

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (step === 1) {
      if (!formData.fullName.trim()) {
        newErrors.fullName = "Full name is required";
        isValid = false;
      }
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
        isValid = false;
      } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        newErrors.email = "Invalid email format";
        isValid = false;
      }
      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required";
        isValid = false;
      }
      if (!formData.country) {
        newErrors.country = "Country is required";
        isValid = false;
      }
    } else if (step === 2) {
      if (!formData.program) {
        newErrors.program = "Program selection is required";
        isValid = false;
      }
      if (!formData.experience) {
        newErrors.experience = "Experience level is required";
        isValid = false;
      }
      if (!formData.motivation.trim()) {
        newErrors.motivation = "Motivation letter is required";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNextStep = () => {
    if (validateStep(formStep)) {
      setFormStep(prev => prev + 1);
    } else {
      toast({
        title: "Please complete all fields",
        description: "All questions must be answered before proceeding.",
        variant: "destructive"
      });
    }
  };

  const handlePrevStep = () => {
    setFormStep(prev => Math.max(1, prev - 1));
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: ""
      }));
    }
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user selects an option
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate step 3 (final confirmation)
    if (!validateStep(2)) {
      toast({
        title: "Please complete all fields",
        description: "All questions must be answered before submitting.",
        variant: "destructive"
      });
      return;
    }
    
    const message = encodeURIComponent(
      `*New Global Talent Program Application*\n\n` +
      `*Personal Information:*\n` +
      `Full Name: ${formData.fullName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Country: ${formData.country}\n\n` +
      `*Program Details:*\n` +
      `Preferred Program: ${formData.program}\n` +
      `Hospitality Experience: ${formData.experience}\n\n` +
      `*Motivation:*\n${formData.motivation}`
    );
    
    // Updated WhatsApp number here
    const whatsappLink = `https://wa.me/+4915210840824?text=${message}`;
    window.open(whatsappLink, "_blank");
    
    toast({
      title: "Application Submitted",
      description: "Your application information has been sent to our recruitment team via WhatsApp.",
    });
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        errors,
        formStep,
        setFormStep,
        handleInputChange,
        handleSelectChange,
        validateStep,
        handleNextStep,
        handlePrevStep,
        handleSubmitApplication
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
