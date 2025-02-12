function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
  
    if (isNaN(weight) || isNaN(height) || height <= 0) {
      document.getElementById('result').innerHTML = "请输入有效的体重和身高!";
      return;
    }
  
    const bmi = weight / (height * height);
    let category = '';
  
    if (bmi < 18.5) {
      category = '偏瘦';
    } else if (bmi < 24.9) {
      category = '正常';
    } else if (bmi < 29.9) {
      category = '超重';
    } else {
      category = '肥胖';
    }
  
    document.getElementById('result').innerHTML = `您的 BMI 是 ${bmi.toFixed(2)}，属于 ${category}。`;
  }
  