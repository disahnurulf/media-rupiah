function cekJawaban(nilai) {
  const feedback = document.getElementById("feedback");
  if (nilai === 10000) {
    feedback.textContent = "✅ Benar! Ini adalah Uang Rp10.000.";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "❌ Salah. Coba lagi!";
    feedback.style.color = "red";
  }
}
