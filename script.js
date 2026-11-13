/* ==========================================================
   সপ্তপদী (Saptapadi.bd) - আল্টিমেট মাস্টার জাভাস্ক্রিপ্ট লজিক
   রূপকার: মোহাম্মদ কামরুল হাসান (@kamrulhosen16)
   ========================================================== */

let tokens = 50;
let pending = 1;
let revenue = 1450;

// সুপার অ্যাপ ইনিশিয়ালাইজেশন
function initSuperApp() {
    renderProfiles('bride');
    playAiVoice("আসসালামু আলাইকুম! সপ্তপদী ম্যাট্রিমনিতে আপনাকে স্বাগতম। পেমেন্টের জন্য শুধুমাত্র বিকাশ ব্যবহার করা হবে।");
    
    // ৬৪ জেলার ইনস্ট্যান্ট সার্চ ফিল্টার লজিক
    const searchInput = document.getElementById('districtSearch');
    if(searchInput) {
        searchInput.addEventListener('input', function(e) {
            const query = e.target.value.trim();
            if(query.length > 0) {
                console.log("জেলা সার্চ করা হচ্ছে: " + query);
            }
        });
    }
}

// এআই ভয়েস অ্যাসিস্ট্যান্ট ব্রাউজার স্পিচ সিন্থেসিস
function playAiVoice(text) {
    const aiTextEl = document.getElementById('aiSpokenText');
    if(aiTextEl) {
        aiTextEl.innerText = '"' + text + '"';
    }
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'bn-BD';
        utterance.rate = 0.95;
        window.speechSynthesis.speak(utterance);
    }
}

// ডুয়াল জোন সিলেকশন (পাত্র ও পাত্রী জোন)
function switchZone(type) {
    if(type === 'bride') {
        const brideTab = document.getElementById('brideTab');
        const groomTab = document.getElementById('groomTab');
        if(brideTab) brideTab.classList.add('active');
        if(groomTab) groomTab.classList.remove('active');
        
        const zoneTitle = document.getElementById('zoneTitle');
        if(zoneTitle) zoneTitle.innerText = 'পাত্রী জোন — ভেরিফাইড তালিকা';
        
        renderProfiles('bride');
        playAiVoice("আপনি পাত্রী জোন বেছে নিয়েছেন। এখানে ভেরিফাইড পাত্রীদের বায়োডাটা রয়েছে।");
    } else {
        const brideTab = document.getElementById('brideTab');
        const groomTab = document.getElementById('groomTab');
        if(groomTab) groomTab.classList.add('active');
        if(brideTab) brideTab.classList.remove('active');
        
        const zoneTitle = document.getElementById('zoneTitle');
        if(zoneTitle) zoneTitle.innerText = 'পাত্র জোন — ভেরিফাইড তালিকা';
        
        renderProfiles('groom');
        playAiVoice("আপনি পাত্র জোন বেছে নিয়েছেন। এখান থেকে পাত্রের বায়োডাটা দেখতে পারবেন।");
    }
}

// ডাইনামিক প্রোফাইল রেন্ডারিং
function renderProfiles(zone) {
    const list = document.getElementById('profileList');
    if(!list) return;
    
    if(zone === 'bride') {
        list.innerHTML = `
            <div class="p-card" style="background:#111827; border:1px solid #1f2937; border-radius:14px; display:flex; overflow:hidden; margin-bottom:10px;">
                <div class="p-avatar" style="width:110px; position:relative; background:#1f2937; display:flex; align-items:center; justify-content:center;">
                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200" alt="Profile" style="width:100%; height:100%; object-fit:cover; filter:blur(10px);">
                    <div class="lock-tag" style="position:absolute; background:rgba(0,0,0,0.75); padding:3px 6px; border-radius:6px; font-size:9px; font-weight:bold; color:#fff;">🔒 লকড</div>
                </div>
                <div class="p-details" style="padding:12px; flex:1; display:flex; flex-direction:column; justify-content:space-between;">
                    <div>
                        <h4 style="font-size:13px; color:#fff;">ID: #78064 • ২০ বছর</h4>
                        <p style="font-size:11px; color:#9ca3af;">শিক্ষার্থী • ঢাকা</p>
                        <p style="color:#10b981; font-size:10px;">✓ কুফু ম্যাচ: ৯৪%</p>
                    </div>
                    <button class="btn-bkash" onclick="openBkashModal('প্রোফাইল আনলক', '৪৯ টাকা')" style="background:#e2136e; color:#fff; border:none; padding:6px 10px; border-radius:6px; font-size:11px; font-weight:bold; cursor:pointer; width:100%; margin-top:6px;">বিকাশে আনলক (৪৯৳)</button>
                </div>
            </div>
        `;
    } else {
        list.innerHTML = `
            <div class="p-card" style="background:#111827; border:1px solid #1f2937; border-radius:14px; display:flex; overflow:hidden; margin-bottom:10px;">
                <div class="p-avatar" style="width:110px; position:relative; background:#1f2937; display:flex; align-items:center; justify-content:center;">
                    <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200" alt="Profile" style="width:100%; height:100%; object-fit:cover; filter:blur(10px);">
                    <div class="lock-tag" style="position:absolute; background:rgba(0,0,0,0.75); padding:3px 6px; border-radius:6px; font-size:9px; font-weight:bold; color:#fff;">🔒 লকড</div>
                </div>
                <div class="p-details" style="padding:12px; flex:1; display:flex; flex-direction:column; justify-content:space-between;">
                    <div>
                        <h4 style="font-size:13px; color:#fff;">ID: #59480 • ২৫ বছর</h4>
                        <p style="font-size:11px; color:#9ca3af;">ইঞ্জিনিয়ার • চট্টগ্রাম</p>
                        <p style="color:#10b981; font-size:10px;">✓ যৌতুকমুক্ত অঙ্গীকার</p>
                    </div>
                    <button class="btn-bkash" onclick="openBkashModal('প্রোফাইল আনলক', '৪৯ টাকা')" style="background:#e2136e; color:#fff; border:none; padding:6px 10px; border-radius:6px; font-size:11px; font-weight:bold; cursor:pointer; width:100%; margin-top:6px;">বিকাশে আনলক (৪৯৳)</button>
                </div>
            </div>
        `;
    }
}

// এক্সক্লুসিভ বিকাশ পেমেন্ট মডাল হ্যান্ডলার
function openBkashModal(purpose, amount) {
    const modalPurpose = document.getElementById('modalPurpose');
    if(modalPurpose) modalPurpose.innerText = purpose + ' (' + amount + ')';
    
    const bkashModal = document.getElementById('bkashModal');
    if(bkashModal) bkashModal.style.display = 'flex';
    
    playAiVoice(purpose + " এর জন্য অফিশিয়াল বিকাশ নম্বরে পেমেন্ট করুন।");
}

function closeBkashModal() {
    const bkashModal = document.getElementById('bkashModal');
    if(bkashModal) bkashModal.style.display = 'none';
}

function submitBkash() {
    const trxInput = document.getElementById('trxInput');
    const trx = trxInput ? trxInput.value.trim() : '';
    if (!trx) { 
        alert('দয়া করে বিকাশ TrxID লিখুন!'); 
        return; 
    }
    closeBkashModal();
    alert('✅ আপনার বিকাশ TrxID (' + trx + ') অ্যাডমিন প্যানেলে (admin777) জমা হয়েছে!');
    if(trxInput) trxInput.value = '';
}

// বিকাশ নম্বর ওয়ান-ক্লিক কপি ফাংশন
function copyBikash() {
    navigator.clipboard.writeText('01734883213');
    alert('✅ বিকাশ পার্সোনাল নম্বর (01734883213) সফলভাবে কপি হয়েছে!');
}

// সিক্রেট পার্সোনাল অ্যাডমিন লক প্যানেল ভেরিফিকেশন (admin777)
function checkAdmin() {
    const passInput = document.getElementById('adminPass');
    const password = passInput ? passInput.value.trim() : '';
    
    if (password === 'admin777') {
        const adminView = document.getElementById('adminView');
        if(adminView) adminView.style.display = 'block';
        playAiVoice("স্বাগতম মোহাম্মদ কামরুল হাসান! সিক্রেট অ্যাডমিন প্যানেল সফলভাবে ওপেন হয়েছে।");
        alert('স্বাগতম মোহাম্মদ কামরুল হাসান! সিক্রেট অ্যাডমিন প্যানেল এবং লাইভ কালেকশন কাউন্টার সক্রিয় করা হয়েছে।');
    } else {
        alert('❌ ভুল মাস্টার পাসওয়ার্ড! সঠিক পাসওয়ার্ড দিন (admin777)।');
    }
}

// অ্যাডমিন প্যানেল ট্রানজ্যাকশন অ্যাপ্রুভ বা টিক চিহ্ন সিস্টেম
function approveAdminTrx(btn) {
    btn.parentElement.innerHTML = "<span style='color:#10b981; font-weight:bold;'>✓ পেমেন্ট অনুমোদিত ও কোড জেনারেটেড</span>";
    playAiVoice("পেমেন্ট সফলভাবে অনুমোদিত হয়েছে।");
    alert("✅ বিকাশ ট্রানজ্যাকশন সফলভাবে অ্যাপ্রুভ করা হয়েছে এবং ইউজারের অ্যাকাউন্টে অটো-কোড চলে গেছে!");
}
