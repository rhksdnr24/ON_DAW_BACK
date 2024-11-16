const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// 기본 경로 처리
app.get('/', (req, res) => {
    res.send('Welcome to the DAW backend!');
});

// 간단한 테스트 API
app.get('/health', (req, res) => {
    res.json({ message: 'Backend is running!' });
});

app.listen(3000, () => console.log('Server running on port 3000'));
