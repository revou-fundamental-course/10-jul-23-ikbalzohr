// Mendaftarkan fungsi handleReset sebagai event handler untuk tombol "Reset"
const resetButton = document.querySelector('button[type="reset"]');
resetButton.addEventListener("click", handleReset);

// Mendaftarkan fungsi handleSubmit sebagai event handler untuk pengiriman form
const formElement = document.querySelector('form');
formElement.addEventListener("submit", handleSubmit);

// Mendaftarkan element-element
const headerElement = document.getElementById("header");
const boxContent = document.getElementById("box-content");
const headText = document.getElementById('head-text')
const mainContent= document.getElementById('main-content')

function handleSubmit(event) {
  event.preventDefault(); // Mencegah pengiriman form
  const form = event.target; // Mendapatkan referensi form
  
  // Mengambil nilai dari setiap input menggunakan nama atribut
  const selectedRadioButton = document.querySelector('input[name="gender"]:checked');
  const beratBadan = form.elements["berat_badan"].value;
  const usia = form.elements["usia"].value;
  const tinggiBadan = form.elements["tinggi_badan"].value;

  
  // Melakukan validasi
  if (!selectedRadioButton) {
      alert('Silahkan Pilih Jenis Kelamin Terlebih Dahulu')
      return
    } 
    if (beratBadan == '' || usia == '' || tinggiBadan == '') {
      alert("Berat Badan, Usia, dan Tinggi Badan Tidak Boleh Kosong")
      return
    }
    if (usia <= 15) {
      alert("Anda Masih dibawah umur")
      return
    }
    
    // Perhitungan BMI 
    const tinggiBadanCm = tinggiBadan/100
    const tinggiBadanKuadrat = tinggiBadanCm * tinggiBadanCm
    const bmi = beratBadan/tinggiBadanKuadrat
    
  // Logic status berat badan
  const kekuranganBeratBadan = 18.5
  const ideal = [18.5, 24.9]
  const kelebihanBeratBadan = [25, 29.9]
  if (bmi < kekuranganBeratBadan ) {
    console.log("kurus")
  }else if (bmi >= ideal[0] && bmi < ideal[1]) {
    console.log("Ideal")
  }else if (bmi >= kelebihanBeratBadan[0] && bmi < kelebihanBeratBadan[1]) {
    console.log("Kelebihan")
  }else {
    console.log('Kegemukan')
  }

  
  // Replace Element-element
  const judulElement = headerElement.querySelector("h2");
  judulElement.textContent = "Hasil";
  headText.textContent = ''
  boxContent.innerHTML = `
    <div class="box-result">
      <p>Berat Badan Lebih</p>
      <div class="result-value">24.7</div>
      <p>Anda memiliki berat badan berlebih</p>
      <button class="btn-green">Download Hasil BMI</button>
    </div>
  `;
  mainContent.innerHTML = `
  <p class="text mb15">Hasil BMI diantara 23 dan 25</p>
  <p class="text mb15">
    Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda
    dianjurkan untuk menurunkan berat badan hingga batas normal.
  </p>
  <div class="text mb15">
    BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan Anda.
  </div>
  <div class="box-color mb-full">
    <div class="box-result">
      <p class="text mb15">Beberapa penyakit yang berasal dari kegemukan</p>
      <p class="text mb15">Mudah lelah, gampang sakit karena imun lemah, dan tulang rentan cedera</p>
    </div>
  </div>
  `;

  console.log(selectedRadioButton.value)
  console.log({bmi});
  console.log("Berat Badan (Kg):", beratBadan);
  console.log("Usia (tahun):", usia);
  console.log("Tinggi Badan (cm):", tinggiBadan);

}

// Fungsi untuk mereset form
function handleReset(event) {
  event.preventDefault(); // Mencegah pengiriman form
  const form = event.target.form; // Mendapatkan referensi form

  // Mereset semua input pada form
  form.reset();
}
