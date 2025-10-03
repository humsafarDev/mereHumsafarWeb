
import { useEffect, useState } from "react";

function useBirthdayWish() {
  const [wish, setWish] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("mereHumsafarUser");
    if (data) {
      const user = JSON.parse(data);

      // ✅ Extract today's month and date
      const today = new Date();
      const todayMonth = today.getMonth() + 1; // month is 0-based
      const todayDate = today.getDate();

      // ✅ Extract user dob month & date
    //   2000-05-23
      const dob = new Date(user?.dateOfBirth);
      const dobMonth = dob.getMonth() + 1;
      const dobDate = dob.getDate();

      if (todayMonth === dobMonth && todayDate === dobDate) {
        setWish(`🎉 Happy Birthday, ${user?.firstName}! 🥳`);
      }
    }
  }, []);

  return wish;
}

export default useBirthdayWish;
