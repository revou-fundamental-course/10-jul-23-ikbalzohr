// Mendaftarkan fungsi handleReset sebagai event handler untuk tombol "Reset"
const resetButton = document.querySelector('button[type="reset"]');
resetButton.addEventListener("click", handleReset);

// Mendaftarkan fungsi handleSubmit sebagai event handler untuk pengiriman form
const formElement = document.querySelector("form");
formElement.addEventListener("submit", handleSubmit);

// Mendaftarkan element-element
const headerElement = document.getElementById("header");
const boxContent = document.getElementById("box-content");
const headText = document.getElementById("head-text");
const mainContent = document.getElementById("main-content");

function handleSubmit(event) {
  event.preventDefault(); // Mencegah pengiriman form
  const form = event.target; // Mendapatkan referensi form
  const linkHome = "https://revou-fundamental-course.github.io/10-jul-23-ikbalzohr/";

  // Mengambil nilai dari setiap input menggunakan nama atribut
  const selectedRadioButton = document.querySelector('input[name="gender"]:checked');
  const beratBadan = form.elements["berat_badan"].value;
  const usia = form.elements["usia"].value;
  const tinggiBadan = form.elements["tinggi_badan"].value;

  // Melakukan validasi
  if (!selectedRadioButton) {
    alert("Silahkan Pilih Jenis Kelamin Terlebih Dahulu");
    return;
  }
  if (beratBadan == "" || usia == "" || tinggiBadan == "") {
    alert("Berat Badan, Usia, dan Tinggi Badan Tidak Boleh Kosong");
    return;
  }
  if (usia <= 15) {
    alert("Anda Masih dibawah umur");
    return;
  }

  // Perhitungan BMI
  const tinggiBadanCm = tinggiBadan / 100;
  const tinggiBadanKuadrat = tinggiBadanCm * tinggiBadanCm;
  const bmi = beratBadan / tinggiBadanKuadrat;

  let status;
  let notes;
  let bmiRange;
  let message;
  let advice;
  let disease;
  let sickness;

  // Logic status berat badan
  const kekuranganBeratBadan = 18.5;
  const ideal = [18.5, 24.9];
  const kelebihanBeratBadan = [25, 29.9];
  if (bmi < kekuranganBeratBadan) {
    status = "Kekurangan Berat Badan";
    notes = "Anda kekurangan berat badan";
    bmiRange = "Hasil BMI kurang dari 18.5";
    message = "Anda berada dalam kategori kurus atau berat badan kurang. Cara terbaik untuk menaikkan berat badan adalah dengan memperhatikan pola makan dan vitamin.";
    advice = "Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menaikkan berat badan hingga batas normal";
    disease = "Beberapa penyakit yang berasal dari kekurangan berat badan";
    sickness = "Mudah lelah, gampang sakit karena imun lemah, dan tulang rentan cedera";
  } else if (bmi >= ideal[0] && bmi < ideal[1]) {
    status = "Normal (Ideal)";
    notes = "Anda memiliki berat badan normal";
    bmiRange = "Hasil BMI antara 19 dan 25";
    message = "Anda berada dalam kategori normal atau berat badan ideal. Pertahankan pola makan anda saat ini dan berolahraga.";
    disease = "Insaallah Anda tidak terkena penyakit";
    advice = "Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk mempertahankan berat badan saat ini";
    sickness = "";
  } else if (bmi >= kelebihanBeratBadan[0] && bmi < kelebihanBeratBadan[1]) {
    status = "Kelebihan berat badan";
    notes = "Anda memiliki berat badan berlebih";
    bmiRange = "Hasil BMI antara 25 dan 30";
    message = "Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kadar makanan yang dikonsumsi dan berolahraga.";
    advice = "Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal";
    disease = "Beberapa penyakit yang berasal dari kelebihan berat badan";
    sickness = "Penyakit jantung, tekanan darah tinggi, diabetes, dan masalah pernapasan";
  } else {
    status = "Kegemukan (Obesitas)";
    notes = "Anda mengalami Obesitas";
    bmiRange = "Hasil BMI lebih dari 30";
    message = "Anda berada dalam kategori terlalu gemuk atau obesitas, Anda perlu berkonsultasi ke Dokter";
    advice = "Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal";
    sickness = "Penyakit jantung, tekanan darah tinggi, diabetes tipe 2, masalah pernapasan, dan jenis kanker tertentu";
    disease = "Beberapa penyakit yang berasal dari kegemukan";
  }

  // Replace Element-element
  const judulElement = headerElement.querySelector("h2");
  judulElement.textContent = "Hasil";
  headText.textContent = "";
  boxContent.innerHTML = `
    <div class="box-result">
      <p>${status}</p>
      <div class="result-value">${bmi.toFixed(2)}</div>
      <p>${notes}</p>
      <button class="btn-green mb15">Download Hasil BMI</button>
      <a href='${linkHome}' class="btn-red">Kembali</a>
    </div>
  `;
  mainContent.innerHTML = `
  <p class="text mb15">${bmiRange}</p>
  <p class="text mb15">
    ${message} ${advice}
  </p>
  <div class="text mb15">
    BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan Anda.
  </div>
  <div class="box-color mb-full">
    <div class="box-result">
      <p class="text mb15">${disease}</p>
      <p class="text mb15">${sickness}</p>
    </div>
  </div>
  `;
}

// Fungsi untuk mereset form
function handleReset(event) {
  event.preventDefault(); // Mencegah pengiriman form
  const form = event.target.form; // Mendapatkan referensi form

  // Mereset semua input pada form
  form.reset();
}
