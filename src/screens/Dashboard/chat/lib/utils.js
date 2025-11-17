import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { religiousPracticesArr } from "../../../ProfileUpdateForm";
import { anualIncomeArr, heightOptions } from "../../../../Utils/const";
import { FaPrayingHands } from "react-icons/fa";

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}



export function calculateAge(dateOfBirth) {
  if (!dateOfBirth) return null;

  const birthDate = new Date(dateOfBirth);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  // Adjust if birthday hasn’t occurred yet this year
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age;
}

  export const getHeightNameById = (id) => {
  const height = heightOptions.find((option) => option.id == id);
  return height ? height.name : id;
};

export  const getAnnualIncomeById = (id)=> {
  const income = anualIncomeArr.find((option) => option.id == id);
  return income ? income.label : id; 
}


export const findIconByName = (name) => {
 const found = religiousPracticesArr?.find(item => item?.name === name)
 
  return found ? found?.icon : religiousPracticesArr[0]?.icon ;
}


export const isValid = (val, extra=null) => {
  let r = true
  if (val === null) {
    r = false
  } else if (val === undefined) {
    r = false
  } else if (val === '') {
    r = false
  } else if (val === extra) {
    r = false
  } else if (val === 'null') {
    r = false
  }
  return r
}

export const isValidArray = (val) => {
  if (isValid(val)) {
    if (typeof val === 'object') {
      return val?.length > 0
    }
  }
  return false
}