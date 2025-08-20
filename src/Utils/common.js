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

export  const trimText = (text, len=15) => {
    if (!text) return '';
    return text.length > 20 ? `${text.slice(0, len)}...` : text;
  }



