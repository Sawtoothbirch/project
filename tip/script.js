function initAkanNameGenerator() {
  const form = document.getElementById('akan-form');
  const result = document.getElementById('akan-result');
  if (!form || !result) return;

  const dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const maleNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
  const femaleNames = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    result.classList.remove('error');
    result.textContent = '';

    const day = parseInt(document.getElementById('day').value, 10);
    const month = parseInt(document.getElementById('month').value, 10);
    const year = parseInt(document.getElementById('year').value, 10);
    const genderEl = form.elements['gender'];
    const gender = genderEl && genderEl.value ? genderEl.value : '';

    // validation
    if (!Number.isInteger(day) || day < 1 || day > 31) {
      result.classList.add('error');
      result.textContent = 'Day must be between 1 and 31.';
      return;
    }
    if (!Number.isInteger(month) || month < 1 || month > 12) {
      result.classList.add('error');
      result.textContent = 'Month must be between 1 and 12.';
      return;
    }
    if (!Number.isInteger(year) || year < 1000 || year > 9999) {
      result.classList.add('error');
      result.textContent = 'Please enter a valid four-digit year.';
      return;
    }
    if (!gender) {
      result.classList.add('error');
      result.textContent = 'Please select your gender.';
      return;
    }

    
    const CC = Math.floor(year / 100);
    const YY = year % 100; 
    const MM = month;
    const DD = day;

     
    const part1 = (4 * CC) - (2 * CC) - 1;
    const calc = part1 + (45 * YY) + (1026 * (MM + 1)) + DD;
    const d = ((calc % 7) + 7) % 7; 
    const dayName = dayNames[d];
    const chosenName = gender === 'male' ? maleNames[d] : femaleNames[d];

    result.innerHTML = `<strong>${chosenName}</strong> — born on ${dayName}, ${DD}/${MM}/${year}`;
  });
}


document.addEventListener('DOMContentLoaded', initAkanNameGenerator);
