// বিকাশ নম্বর ওয়ান-ক্লিক কপি ফাংশন
function copyBikash() {
    navigator.clipboard.writeText('01734883213');
    alert('বিকাশ পার্সোনাল নম্বর (01734883213) সফলভাবে কপি হয়েছে!');
}

// সিক্রেট পার্সোনাল অ্যাডমিন লক প্যানেল ভেরিফিকেশন
function checkAdmin() {
    const password = document.getElementById('adminPass').value;
    if (password === 'admin777') {
        alert('স্বাগতম মোহাম্মদ কামরুল হাসান! সিক্রেট অ্যাডমিন প্যানেল এবং লাইভ ভিজিটর/কালেকশন কাউন্টার সক্রিয় করা হয়েছে।');
    } else {
        alert('ভুল মাস্টার পাসওয়ার্ড! পুনরায় চেষ্টা করুন।');
    }
}
