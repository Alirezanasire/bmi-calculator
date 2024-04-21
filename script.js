document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;
    const bmi = weight / (height * height);
    let result = `شاخص توده بدنی شما ${bmi.toFixed(2)} `;
    if (bmi < 18.5) {
      result += 'شما کم وزن هستید.';
    } else if (bmi >= 18.5 && bmi < 25) {
      result += 'شما وزن طبیعی دارید.';
    } else {
      result += 'شما اضافه وزن دارید.';
    }
    document.getElementById('result').textContent = result;
  });