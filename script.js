// 1. ĐỔI THEME THEO MÙA
function setSeasonalTheme() {
    const month = new Date().getMonth() + 1;
    const root = document.documentElement;
    let title = document.getElementById('season-title');
    if (!title) return;

    // Đã xóa chữ "FTU SpeedEAT", chỉ giữ lại tên mùa và icon
    if (month >= 2 && month <= 4) { 
        root.style.setProperty('--primary', '#4CAF50'); title.innerText = "Mùa Xuân 🌸"; 
    } else if (month >= 5 && month <= 7) { 
        root.style.setProperty('--primary', '#f44336'); title.innerText = "Mùa Hè ☀️"; 
    } else if (month >= 8 && month <= 10) { 
        root.style.setProperty('--primary', '#ff9800'); title.innerText = "Mùa Thu 🍂"; 
    } else { 
        root.style.setProperty('--primary', '#2196F3'); title.innerText = "Mùa Đông ❄️"; 
    }
}

// 2. KHO ẢNH CHO TỪNG DANH MỤC
const categoryImages = {
    "Đồ Uống Đóng Chai": "https://vending-cdn.kootoro.com/torov-cms/upload/image/1718076636563-C%C3%A1c%20lo%E1%BA%A1i%20n%C6%B0%E1%BB%9Bc%20c%E1%BB%A7a%20pepsi.jpg",
    "Đồ Uống Khác": "https://bizweb.dktcdn.net/100/025/663/files/tra-hoa-qua-1.jpg?v=1620664269182",
    "Xôi (Sticky Rice)": "https://photo.znews.vn/w660/Uploaded/ngotno/2021_05_16/53734828_2222221634705369_8847531498799782887_n.jpg",
    "Bánh Mỳ (Bread)": "https://media.phunutoday.vn/files/upload_images/2016/01/21/cach-lam-banh-my-trung-ngon-1-phunutoday_vn.jpg",
    "Bún - Phở - Mỳ": "https://media.phunutoday.vn/files/upload_images/2016/02/06/mon-an-phunutodayvn.jpg",
    "Món Khác": "https://media-cdn-v2.laodong.vn/storage/newsportal/2023/11/29/1273358/Com-Tam-2-01.jpeg"
};

// 3. DỮ LIỆU MÓN ĂN
const menuData = [
    { id: 1, category: "Đồ Uống Đóng Chai", name: "Nước Aquafina", price: 7000, calo: 0 },
    { id: 2, category: "Đồ Uống Đóng Chai", name: "C2", price: 12000, calo: 140 },
    { id: 3, category: "Đồ Uống Đóng Chai", name: "7 Up", price: 12000, calo: 140 },
    { id: 4, category: "Đồ Uống Đóng Chai", name: "Revive", price: 12000, calo: 125 },
    { id: 5, category: "Đồ Uống Đóng Chai", name: "Pepsi chai", price: 8000, calo: 150 },
    { id: 6, category: "Đồ Uống Khác", name: "Trà quất", price: 15000, calo: 100 },
    { id: 7, category: "Đồ Uống Khác", name: "Trà đào", price: 15000, calo: 120 },
    { id: 8, category: "Đồ Uống Khác", name: "Lipton", price: 12000, calo: 80 },
    { id: 9, category: "Đồ Uống Khác", name: "Trà dâu, trà bạc hà", price: 15000, calo: 110 },
    { id: 10, category: "Đồ Uống Khác", name: "Sữa đặc nóng", price: 12000, calo: 150 },
    { id: 11, category: "Xôi (Sticky Rice)", name: "Xôi ruốc vừng", price: 15000, calo: 400 },
    { id: 12, category: "Xôi (Sticky Rice)", name: "Xôi pate", price: 15000, calo: 450 },
    { id: 13, category: "Xôi (Sticky Rice)", name: "Xôi pate chả", price: 20000, calo: 550 },
    { id: 14, category: "Xôi (Sticky Rice)", name: "Xôi thịt", price: 20000, calo: 600 },
    { id: 15, category: "Bánh Mỳ (Bread)", name: "Bánh mỳ trứng", price: 15000, calo: 380 },
    { id: 16, category: "Bánh Mỳ (Bread)", name: "Bánh mỳ chả", price: 15000, calo: 400 },
    { id: 17, category: "Bánh Mỳ (Bread)", name: "Bánh mỳ pate", price: 15000, calo: 420 },
    { id: 18, category: "Bánh Mỳ (Bread)", name: "Bánh mỳ ruốc", price: 15000, calo: 350 },
    { id: 19, category: "Bún - Phở - Mỳ", name: "Mỳ trứng", price: 18000, calo: 400 },
    { id: 20, category: "Bún - Phở - Mỳ", name: "Mỳ bò", price: 30000, calo: 450 },
    { id: 21, category: "Bún - Phở - Mỳ", name: "Phở bò tái", price: 30000, calo: 550 },
    { id: 22, category: "Bún - Phở - Mỳ", name: "Phở bò chín", price: 30000, calo: 550 },
    { id: 23, category: "Bún - Phở - Mỳ", name: "Phở gà", price: 30000, calo: 500 },
    { id: 24, category: "Bún - Phở - Mỳ", name: "Bún chả", price: 35000, calo: 600 },
    { id: 25, category: "Bún - Phở - Mỳ", name: "Bún cá", price: 35000, calo: 500 },
    { id: 26, category: "Bún - Phở - Mỳ", name: "Bún riêu bò", price: 35000, calo: 530 },
    { id: 27, category: "Món Khác", name: "Bánh bao thập cẩm", price: 15000, calo: 350 },
    { id: 28, category: "Món Khác", name: "Bánh cuốn chả", price: 20000, calo: 450 },
    { id: 29, category: "Món Khác", name: "Cơm tấm sườn", price: 35000, calo: 650 },
    { id: 30, category: "Món Khác", name: "Cơm rang dưa bò", price: 40000, calo: 750 },
    { id: 31, category: "Món Khác", name: "Cơm gà", price: 40000, calo: 700 }
];

let cart = [];

function showToast(message) {
    const toast = document.getElementById("toast");
    if(toast) {
        toast.innerText = message;
        toast.className = "show";
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 2000);
    }
}

function renderMenu() {
    const list = document.getElementById('menu-list');
    if (!list) return;
    list.innerHTML = ''; 
    const categories = [...new Set(menuData.map(item => item.category))];

    categories.forEach(cat => {
        let catImg = categoryImages[cat] ? categoryImages[cat] : "https://via.placeholder.com/90x55?text=Food";
        list.innerHTML += `
            <div class="category-header">
                <img src="${catImg}" alt="${cat}" class="category-banner-img">
                <h3 class="category-title">${cat}</h3>
            </div>
        `;
        const itemsInCategory = menuData.filter(item => item.category === cat);
        itemsInCategory.forEach(item => {
            list.innerHTML += `
                <div class="menu-item">
                    <div style="flex-grow: 1;">
                        <strong>${item.name}</strong><br>
                        <small>${item.price.toLocaleString()} VNĐ | ${item.calo} kcal</small>
                    </div>
                    <button class="btn" onclick="addToCart(${item.id})">Thêm</button>
                </div>
            `;
        });
    });
}

function addToCart(id) {
    const item = menuData.find(i => i.id === id);
    if (item) { 
        cart.push(item); 
        updateCart(); 
        showToast(`Đã thêm ${item.name} vào giỏ! 🛒`);
    }
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
                <button class="btn" style="background: #e2e8f0; color: #f44336; padding: 5px 10px;" onclick="removeFromCart(${index})">Xóa</button>
            </li>
        `;
    });

    const discount = totalPrice * 0.05; 
    const finalPrice = totalPrice - discount;

    document.getElementById('total-calo').innerText = totalCalo;
    document.getElementById('total-price').innerText = totalPrice.toLocaleString();
    document.getElementById('discount').innerText = discount.toLocaleString();
    document.getElementById('final-price').innerText = finalPrice.toLocaleString();
    
    const caloElement = document.getElementById('total-calo');
    if (totalCalo > 800) {
        caloElement.style.color = '#f44336'; 
        caloElement.title = "Vượt mức calo khuyến nghị!";
    } else { caloElement.style.color = '#4CAF50'; }
}

function removeFromCart(index) { cart.splice(index, 1); updateCart(); showToast("Đã xóa món khỏi giỏ 🗑️"); }

function showTab(tabId) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    document.querySelectorAll('.tab').forEach(t => {
        if (t.getAttribute('onclick') && t.getAttribute('onclick').includes(tabId)) t.classList.add('active');
    });
}

// 4. GAME CARO
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
const winningConditions = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ];

function makeMove(index) {
    if (board[index] !== '' || !gameActive) return;
    board[index] = 'X'; updateBoardUI(); checkWin('X');
    if (gameActive) { setTimeout(botMove, 400); }
}

function botMove() {
    if (!gameActive) return;

    let emptyCells = board
        .map((cell, index) => cell === '' ? index : null)
        .filter(v => v !== null);

    if (emptyCells.length === 0) return;

    let move = -1;

    // 1. Thắng ngay nếu có thể
    move = findBestMove('O');

    // 2. Chặn người chơi thắng
    if (move === -1) {
        move = findBestMove('X');
    }

    // 3. Tạo fork cho bot
    if (move === -1) {
        move = findForkMove('O');
    }

    // 4. Chặn fork của người chơi
    if (move === -1) {
        move = findForkMove('X');
    }

    // 5. Chiếm trung tâm
    if (move === -1 && board[4] === '') {
        move = 4;
    }

    // 6. Ưu tiên góc
    if (move === -1) {
        const corners = [0, 2, 6, 8];
        const freeCorners = corners.filter(i => board[i] === '');
        if (freeCorners.length > 0) {
            move = freeCorners[Math.floor(Math.random() * freeCorners.length)];
        }
    }

    // 7. Đi random
    if (move === -1) {
        move = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    }

    board[move] = 'O';
    updateBoardUI();
    checkWin('O');
}

function findForkMove(player) {
    for (let i = 0; i < 9; i++) {

        if (board[i] === '') {

            // thử nước đi
            board[i] = player;

            let winningWays = 0;

            for (let condition of winningConditions) {
                const [a, b, c] = condition;

                let cells = [board[a], board[b], board[c]];

                let playerCount = cells.filter(cell => cell === player).length;
                let emptyCount = cells.filter(cell => cell === '').length;

                if (playerCount === 2 && emptyCount === 1) {
                    winningWays++;
                }
            }

            // hoàn tác
            board[i] = '';

            // fork = tạo ra >=2 đường thắng
            if (winningWays >= 2) {
                return i;
            }
        }
    }

    return -1;
}

setTimeout(() => {
   botMove();
}, 500);

function checkWin(player) {
    let roundWon = false;
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) { roundWon = true; break; }
    }
    const resultText = document.getElementById('game-result');
    if (roundWon) {
        if (player === 'X') {
            resultText.innerHTML = "🎉 Tuyệt vời! Bạn nhận được mã: <strong>SPEEDEAT10K</strong>";
            resultText.style.color = "#4CAF50";
        } else {
            resultText.innerText = "😢 Máy thắng rồi! Thử lại để nhận quà nhé.";
            resultText.style.color = "#f44336";
        }
        gameActive = false; return;
    }
    if (!board.includes('')) {
        resultText.innerText = "Hòa nhau! Chơi lại để săn mã nhé.";
        resultText.style.color = "#ff9800"; gameActive = false;
    }
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', '']; gameActive = true;
    document.getElementById('game-result').innerText = ''; updateBoardUI();
}

// 5. TẠO MÃ QR THANH TOÁN
function generateQR() {
    if (cart.length === 0) { showToast("Giỏ hàng đang trống!"); return; }
    
    let finalPriceText = document.getElementById('final-price').innerText.replace(/,/g, '');
    let amount = parseInt(finalPriceText);

    const bankID = "MB"; 
    const accountNo = "0191899956789"; 
    const accountName = "Hoang Trung Anh"; 
    
    const orderCode = "FTU" + Math.floor(Math.random() * 10000); 
    const description = `${orderCode}`;

    const safeName = encodeURIComponent(accountName);
    const safeDescription = encodeURIComponent(description);

    const qrUrl = `https://img.vietqr.io/image/${bankID}-${accountNo}-compact2.png?amount=${amount}&addInfo=${safeDescription}&accountName=${safeName}`;

    document.getElementById('qr-image').src = qrUrl;
    document.getElementById('qr-content').innerText = description;
    document.getElementById('qr-container').style.display = "block";
}

window.addEventListener('DOMContentLoaded', () => {
    setSeasonalTheme(); renderMenu();
});
