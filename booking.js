const dateInput = document.getElementById('booking-date');
if(dateInput) {
    const today = new Date();
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 30);
    const formatDate = (d) => d.toISOString().split('T')[0];
    dateInput.min = formatDate(today);
    dateInput.max = formatDate(maxDate);
}

document.getElementById('booking-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("شكرًا لك! تم إرسال طلب الحجز لشركة Calm Solutions. سنتواصل معك عبر واتساب.");
    document.getElementById('booking-modal').style.display = 'none';
});
