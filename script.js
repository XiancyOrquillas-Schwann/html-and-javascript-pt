function calculateAge() {
    const birthdate = document.getElementById("birthdate").value;
    const result = document.getElementById("result");

    if (!birthdate) {
        result.innerHTML = "Please select a birthdate.";
        return;
    }

    const birthDateObj = new Date(birthdate);
    const today = new Date();

    let years = today.getFullYear() - birthDateObj.getFullYear();
    let months = today.getMonth() - birthDateObj.getMonth();
    let days = today.getDate() - birthDateObj.getDate();

    // Adjust if days are negative
    if (days < 0) {
        months--;
        const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += previousMonth.getDate();
    }

    // Adjust if months are negative
    if (months < 0) {
        years--;
        months += 12;
    }

    result.innerHTML = `
        You are <br>
        ${years} Years, ${months} Months, and ${days} Days old.
    `;
}