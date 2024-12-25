// جلب عناصر الصفحة
const postForm = document.getElementById('postForm');
const postsContainer = document.getElementById('postsContainer');

// إضافة مستمع للنموذج لمعالجة البوست عند الإرسال
postForm.addEventListener('submit', function (e) {
    e.preventDefault(); // منع التحديث الافتراضي للصفحة

    // جلب البيانات من الحقول
    const author = document.getElementById('author').value;
    const content = document.getElementById('content').value;

    // التحقق من أن الحقول ليست فارغة
    if (author.trim() === '' || content.trim() === '') {
        alert('يرجى ملء جميع الحقول!');
        return;
    }

    // إنشاء بوست جديد
    const post = document.createElement('div');
    post.classList.add('post');
    post.innerHTML = `
        <h3>${author}</h3>
        <p>${content}</p>
    `;

    // إضافة البوست إلى قائمة البوستات
    postsContainer.prepend(post);

    // إعادة تعيين الحقول
    postForm.reset();
});
