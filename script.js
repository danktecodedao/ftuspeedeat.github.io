// 1. ĐỔI THEME THEO MÙA - FTU SpeedEAT
function setSeasonalTheme() {
    const month = new Date().getMonth() + 1;
    const root = document.documentElement;
    let title = document.getElementById('season-title');
    if (!title) return;

    if (month >= 2 && month <= 4) { 
        root.style.setProperty('--primary', '#4CAF50'); title.innerText = "FTU SpeedEAT Mùa Xuân 🌸"; 
    } else if (month >= 5 && month <= 7) { 
        root.style.setProperty('--primary', '#f44336'); title.innerText = "FTU SpeedEAT Mùa Hè ☀️"; 
    } else if (month >= 8 && month <= 10) { 
        root.style.setProperty('--primary', '#ff9800'); title.innerText = "FTU SpeedEAT Mùa Thu 🍂"; 
    } else { 
        root.style.setProperty('--primary', '#2196F3'); title.innerText = "FTU SpeedEAT Mùa Đông ❄️"; 
    }
}

const categoryImages = {
    "Đồ Uống Đóng Chai": "https://vending-cdn.kootoro.com/torov-cms/upload/image/1718076636563-C%C3%A1c%20lo%E1%BA%A1i%20n%C6%B0%E1%BB%9Bc%20c%E1%BB%A7a%20pepsi.jpg",
    "Đồ Uống Khác": "https://bizweb.dktcdn.net/100/025/663/files/tra-hoa-qua-1.jpg?v=1620664269182",
    "Xôi (Sticky Rice)": "https://photo.znews.vn/w660/Uploaded/ngotno/2021_05_16/53734828_2222221634705369_8847531498799782887_n.jpg",
    "Bánh Mỳ (Bread)": "https://media.phunutoday.vn/files/upload_images/2016/01/21/cach-lam-banh-my-trung-ngon-1-phunutoday_vn.jpg",
    "Bún - Phở - Mỳ": "https://media.phunutoday.vn/files/upload_images/2016/02/06/mon-an-phunutodayvn.jpg",
    "Món Khác": "https://media-cdn-v2.laodong.vn/storage/newsportal/2023/11/29/1273358/Com-Tam-2-01.jpeg"
};

// 2. NHẬP LIỆU TOÀN BỘ MENU THEO ẢNH
const menuData = [
    // Đồ Uống Đóng Chai
    { id: 1, category: "Đồ Uống Đóng Chai", name: "Nước Aquafina", price: 7000, calo: 0 },
    { id: 2, category: "Đồ Uống Đóng Chai", name: "C2", price: 12000, calo: 140 },
    { id: 3, category: "Đồ Uống Đóng Chai", name: "7 Up", price: 12000, calo: 140 },
    { id: 4, category: "Đồ Uống Đóng Chai", name: "Revive", price: 12000, calo: 125 },
    { id: 5, category: "Đồ Uống Đóng Chai", name: "Pepsi chai", price: 8000, calo: 150 },
    // Đồ Uống Khác
    { id: 6, category: "Đồ Uống Khác", name: "Trà quất", price: 15000, calo: 100 },
    { id: 7, category: "Đồ Uống Khác", name: "Trà đào", price: 15000, calo: 120 },
    { id: 8, category: "Đồ Uống Khác", name: "Lipton", price: 12000, calo: 80 },
    { id: 9, category: "Đồ Uống Khác", name: "Trà dâu, trà bạc hà", price: 15000, calo: 110 },
    { id: 10, category: "Đồ Uống Khác", name: "Sữa đặc nóng", price: 12000, calo: 150 },
    // Xôi (Sticky Rice)
    { id: 11, category: "Xôi (Sticky Rice)", name: "Xôi ruốc vừng", price: 15000, calo: 400 },
    { id: 12, category: "Xôi (Sticky Rice)", name: "Xôi pate", price: 15000, calo: 450 },
    { id: 13, category: "Xôi (Sticky Rice)", name: "Xôi pate chả", price: 20000, calo: 550 },
    { id: 14, category: "Xôi (Sticky Rice)", name: "Xôi thịt", price: 20000, calo: 600 },
    // Bánh Mỳ (Bread)
    { id: 15, category: "Bánh Mỳ (Bread)", name: "Bánh mỳ trứng", price: 15000, calo: 380 },
    { id: 16, category: "Bánh Mỳ (Bread)", name: "Bánh mỳ chả", price: 15000, calo: 400 },
    { id: 17, category: "Bánh Mỳ (Bread)", name: "Bánh mỳ pate", price: 15000, calo: 420 },
    { id: 18, category: "Bánh Mỳ (Bread)", name: "Bánh mỳ ruốc", price: 15000, calo: 350 },
    // Bún - Phở - Mỳ
    { id: 19, category: "Bún - Phở - Mỳ", name: "Mỳ trứng", price: 18000, calo: 400 },
    { id: 20, category: "Bún - Phở - Mỳ", name: "Mỳ bò", price: 30000, calo: 450 },
    { id: 21, category: "Bún - Phở - Mỳ", name: "Phở bò tái", price: 30000, calo: 550 },
    { id: 22, category: "Bún - Phở - Mỳ", name: "Phở bò chín", price: 30000, calo: 550 },
    { id: 23, category: "Bún - Phở - Mỳ", name: "Phở gà", price: 30000, calo: 500 },
    { id: 24, category: "Bún - Phở - Mỳ", name: "Bún chả", price: 35000, calo: 600 },
    { id: 25, category: "Bún - Phở - Mỳ", name: "Bún cá", price: 35000, calo: 500 },
    { id: 26, category: "Bún - Phở - Mỳ", name: "Bún riêu bò", price: 35000, calo: 530 },
    // Món Khác
    { id: 27, category: "Món Khác", name: "Bánh bao thập cẩm", price: 15000, calo: 350 },
    { id: 28, category: "Món Khác", name: "Bánh cuốn chả", price: 20000, calo: 450 },
    { id: 29, category: "Món Khác", name: "Cơm tấm sườn", price: 35000, calo: 650 },
    { id: 30, category: "Món Khác", name: "Cơm rang dưa bò", price: 40000, calo: 750 },
    { id: 31, category: "Món Khác", name: "Cơm gà", price: 40000, calo: 700 }
];

let cart = [];

function renderMenu() {
    const list = document.getElementById('menu-list');
    if (!list) return;
    list.innerHTML = ''; 
    
    // Lọc ra danh sách các Category không trùng lặp
    const categories = [...new Set(menuData.map(item => item.category))];

    categories.forEach(cat => {
        // In ra tên Danh mục
        list.innerHTML += `<h3 class="category-title">${cat}</h3>`;
        // In ra các món trong Danh mục đó
        const itemsInCategory = menuData.filter(item => item.category === cat);
        itemsInCategory.forEach(item => {
            // Kiểm tra: Nếu món ăn có thuộc tính 'image' thì tạo mã HTML chứa ảnh, nếu không có thì bỏ trống
            let imageHTML = item.image 
                ? `<img src="${item.image}" alt="${item.name}" style="width: 60px; height: 60px; border-radius: 10px; object-fit: cover; margin-right: 15px;">` 
                : ``;

            list.innerHTML += `
                <div class="menu-item">
                    ${imageHTML}
                    <div style="flex-grow: 1;">
                        <strong>${item.name}</strong><br>
                        <small>${item.price.toLocaleString()} VNĐ | ${item.calo} kcal</small>
                    </div>
                    <button class="btn" onclick="addToCart(${item.id})">Thêm</button>
                </div>
            `;
        });
    }); // <-- Đã fix lỗi thiếu dấu đóng vòng lặp ở đây
} // <-- Đã fix lỗi thiếu dấu đóng hàm ở đây

function addToCart(id) {
    const item = menuData.find(i => i.id === id);
    if (item) { cart.push(item); updateCart(); }
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    if (!cartList) return;
    cartList.innerHTML = '';
    let totalCalo = 0; let totalPrice = 0;

    cart.forEach((item, index) => {
        totalCalo += item.calo; totalPrice += item.price;
        cartList.innerHTML += `
            <li class="menu-item" style="border-bottom: 1px solid #eee;">
                <span>${item.name}</span>
                <button class="btn" style="background: #f44336; padding: 5px 10px;" onclick="removeFromCart(${index})">X</button>
            </li>
        `;
    });

    const discount = totalPrice * 0.05; 
    const finalPrice = totalPrice - discount;

    document.getElementById('total-calo').innerText = totalCalo;
    document.getElementById('total-price').innerText = totalPrice.toLocaleString();
    document.getElementById('discount').innerText = discount.toLocaleString();
    document.getElementById('final-price').innerText = finalPrice.toLocaleString();
    
    // Cảnh báo calo
    const caloElement = document.getElementById('total-calo');
    if (totalCalo > 800) {
        caloElement.style.color = '#f44336'; 
        caloElement.title = "Vượt mức calo khuyến nghị!";
    } else { caloElement.style.color = '#4CAF50'; }
}

function removeFromCart(index) { cart.splice(index, 1); updateCart(); }

// 3. ĐIỀU HƯỚNG TABS
function showTab(tabId) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    document.querySelectorAll('.tab').forEach(t => {
        if (t.getAttribute('onclick') && t.getAttribute('onclick').includes(tabId)) t.classList.add('active');
    });
}

// 4. GAME CARO (TIC-TAC-TOE 3x3) NHẬN VOUCHER
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
const winningConditions = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ];

function makeMove(index) {
    if (board[index] !== '' || !gameActive) return;
    
    // Người chơi đánh (X)
    board[index] = 'X';
    updateBoardUI();
    checkWin('X');

    // Máy đánh (O)
    if (gameActive) {
        setTimeout(botMove, 400); // Máy delay 1 chút cho giống thật
    }
}

function botMove() {
    let emptyCells = [];
    for (let i = 0; i < 9; i++) { if (board[i] === '') emptyCells.push(i); }
    
    if (emptyCells.length > 0) {
        let randomIdx = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        board[randomIdx] = 'O';
        updateBoardUI();
        checkWin('O');
    }
}

function updateBoardUI() {
    const cells = document.querySelectorAll('.cell');
    for (let i = 0; i < 9; i++) {
        cells[i].innerText = board[i];
        cells[i].className = `cell ${board[i].toLowerCase()}`;
    }
}

function checkWin(player) {
    let roundWon = false;
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) { roundWon = true; break; }
    }

    const resultText = document.getElementById('game-result');
    if (roundWon) {
        if (player === 'X') {
            resultText.innerHTML = "🎉 Tuyệt vời! Bạn nhận được mã giảm giá: <strong>SPEEDEAT10K</strong>";
            resultText.style.color = "#4CAF50";
        } else {
            resultText.innerText = "😢 Máy thắng rồi! Thử lại để nhận quà nhé.";
            resultText.style.color = "#f44336";
        }
        gameActive = false;
        return;
    }

    if (!board.includes('')) {
        resultText.innerText = "Hòa nhau! Chơi lại để săn mã nhé.";
        resultText.style.color = "#ff9800";
        gameActive = false;
    }
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    document.getElementById('game-result').innerText = '';
    updateBoardUI();
}

// 5. TẠO MÃ QR THANH TOÁN ĐỘNG (Dùng VietQR API)
function generateQR() {
    if (cart.length === 0) {
        alert("Giỏ hàng đang trống. Vui lòng chọn món trước!");
        return;
    }

    // Lấy tổng tiền cuối cùng (đã trừ chuỗi định dạng VNĐ)
    let finalPriceText = document.getElementById('final-price').innerText.replace(/,/g, '');
    let amount = parseInt(finalPriceText);

    const bankID = "MB"; // Ngân hàng
    const accountNo = "0191899956789"; // Số tài khoản
    const accountName = "Hoang Trung Anh"; // Tên chủ thẻ (Viết không dấu)
    
    // Tạo mã đơn hàng ngẫu nhiên
    const orderCode = "FTU" + Math.floor(Math.random() * 10000); 
    const description = `${orderCode}`;

    // <-- Đã fix: Mã hóa tên và nội dung để link URL không bị gãy do khoảng trắng -->
    const safeName = encodeURIComponent(accountName);
    const safeDescription = encodeURIComponent(description);

    // Link API tạo QR chuẩn xác
    const qrUrl = `https://img.vietqr.io/image/${bankID}-${accountNo}-compact2.png?amount=${amount}&addInfo=${safeDescription}&accountName=${safeName}`;

    // Hiển thị mã QR lên giao diện
    document.getElementById('qr-image').src = qrUrl;
    document.getElementById('qr-content').innerText = description;
    document.getElementById('qr-container').style.display = "block";
}

window.addEventListener('DOMContentLoaded', () => {
    setSeasonalTheme();
    renderMenu();
});
