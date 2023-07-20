// Mendaftarkan fungsi handleReset sebagai event handler untuk tombol "Reset"
const resetButton = document.querySelector('button[type="reset"]');
resetButton.addEventListener("click", handleReset);

// Mendaftarkan fungsi handleSubmit sebagai event handler untuk pengiriman form
const formElement = document.querySelector('form');
formElement.addEventListener("submit", handleSubmit);

// Mendaftarkan element-element
const headerElement = document.getElementById("header");

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
