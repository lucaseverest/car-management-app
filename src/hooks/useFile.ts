import { MouseEvent, useRef, useState } from "react";

const useFile = () => {
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    if (selectedFile && isValidFileType(selectedFile)) {
      setFile(selectedFile);
    } else {
      alert("Por favor, selecione um arquivo JPG, JPEG ou PNG.");
    }
  };

  const isValidFileType = (file: File) => {
    const validTypes = ["image/jpeg", "image/jpg", "image/png"];
    return validTypes.includes(file.type);
  };

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleInputButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    fileInputRef.current?.click();
  };

  return {
    file,
    setFile,
    handleFileChange,
    fileInputRef,
    handleInputButtonClick,
    convertToBase64,
  };
};

export default useFile;
