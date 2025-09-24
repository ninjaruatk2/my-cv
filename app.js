const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// cấu hình views và static
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// dữ liệu CV mẫu (bạn thay nội dung)
const cvData = {
  name: 'Nguyễn Quang Hùng',
  title: 'Fullstack Developer',
  summary: 'Chào mọi người, mình là Hùng, một lập trình viên Fullstack với đam mê tạo ra các giải pháp web hiệu quả.',
  contacts: {
    email: 'hunggiotai@gmail.com',
    phone: '+84 1234554321',
    location: 'Huế, Việt Nam'
  },
  skills: ['Node.js', 'Express', 'HTML5/CSS3', 'JavaScript', 'React', 'MongoDB', 'RESTful APIs'],
  experiences: [
    { company: 'Công ty A', period: '2019-2024', role: 'Fullstack Developer', desc: 'Tham gia phát triển các tính năng mới cho ứng dụng web. Tối ưu hiệu suất và sửa lỗi.' },
    { company: 'Công ty Vinpro', period: '2024 - nay', role: 'Frontend Intern', desc: 'Hỗ trợ phát triển giao diện người dùng bằng HTML/CSS và JavaScript. Làm việc với các thư viện CSS framework.' }
  ],
  education: [
    { school: 'Đại học Khoa Học Huế', period: '2022 - 2026', degree: 'Cử nhân Kỹ thuật Phần mềm' }
  ]
};

// route chính
app.get('/', (req, res) => {
  res.render('index', { cv: cvData });
});

// bắt đầu server
app.listen(PORT, () => {
  console.log(`Server chạy tại http://localhost:${PORT}`);
});