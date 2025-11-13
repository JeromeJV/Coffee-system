document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const roleSelection = document.getElementById('roleSelection');
    const cashierLogin = document.getElementById('cashierLogin');
    const ownerLogin = document.getElementById('ownerLogin');
    const posSystem = document.getElementById('posSystem');
    const ownerDashboard = document.getElementById('ownerDashboard');
    
    const cashierBtn = document.getElementById('cashierBtn');
    const ownerBtn = document.getElementById('ownerBtn');
    const backFromCashier = document.getElementById('backFromCashier');
    const backFromOwner = document.getElementById('backFromOwner');
    
    const cashierLoginForm = document.getElementById('cashierLoginForm');
    const ownerLoginForm = document.getElementById('ownerLoginForm');
    
    // Cashier POS elements
    const menuGrid = document.getElementById('menuGrid');
    const cartItems = document.getElementById('cartItems');
    const totalPriceElement = document.getElementById('totalPrice');
    const amountDueElement = document.getElementById('amountDue');
    const displayCashierName = document.getElementById('displayCashierName');
    const categoryTabs = document.querySelectorAll('.category-tab');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    
    // Sales History elements
    const cashierSalesHistory = document.getElementById('cashierSalesHistory');
    const cashierTodaySales = document.getElementById('cashierTodaySales');
    const cashierTodayOrders = document.getElementById('cashierTodayOrders');
    const cashierAvgOrder = document.getElementById('cashierAvgOrder');
    const cashierSalesTable = document.getElementById('cashierSalesTable');
    const cashierDateFilter = document.getElementById('cashierDateFilter');
    
    // Owner Dashboard elements
    const displayOwnerName = document.getElementById('displayOwnerName');
    const ownerLogoutBtn = document.getElementById('ownerLogoutBtn');
    const recentOrdersElement = document.getElementById('recentOrders');
    const sidebarLinks = document.querySelectorAll('.sidebar-menu a');
    const contentSections = document.querySelectorAll('.content-section');
    
    // Sales History in Owner Dashboard
    const totalRevenue = document.getElementById('totalRevenue');
    const totalOrders = document.getElementById('totalOrders');
    const avgOrder = document.getElementById('avgOrder');
    const bestCashier = document.getElementById('bestCashier');
    const salesHistoryTable = document.getElementById('salesHistoryTable');
    const dateFilter = document.getElementById('dateFilter');
    const cashierFilter = document.getElementById('cashierFilter');
    const paymentFilter = document.getElementById('paymentFilter');
    
    // Ingredients Management elements
    const ingredientsStockTable = document.getElementById('ingredientsStockTable');
    const saveIngredientBtn = document.getElementById('saveIngredient');
    const clearIngredientFormBtn = document.getElementById('clearIngredientForm');
    
    // Cashier Management elements
    const saveCashierBtn = document.getElementById('saveCashier');
    const clearCashierFormBtn = document.getElementById('clearCashierForm');
    
    // Item Menu Management elements
    const saveItemBtn = document.getElementById('saveItem');
    const clearItemFormBtn = document.getElementById('clearItemForm');
    
    // Payment Modal Elements
    const paymentModal = document.getElementById('paymentModal');
    const paymentMethods = document.querySelectorAll('.payment-method');
    const paymentDetails = document.querySelectorAll('.payment-details');
    const cashAmountInput = document.getElementById('cashAmount');
    const changeAmountElement = document.getElementById('changeAmount');
    const confirmPaymentBtn = document.getElementById('confirmPaymentBtn');
    const cancelPaymentBtn = document.getElementById('cancelPaymentBtn');
    const closePaymentModal = document.getElementById('closePaymentModal');
    
    // Receipt Modal Elements
    const receiptModal = document.getElementById('receiptModal');
    const receiptDate = document.getElementById('receiptDate');
    const receiptOrderId = document.getElementById('receiptOrderId');
    const receiptPaymentMethod = document.getElementById('receiptPaymentMethod');
    const receiptCashier = document.getElementById('receiptCashier');
    const receiptBody = document.getElementById('receiptBody');
    const receiptTotal = document.getElementById('receiptTotal');
    const receiptChange = document.getElementById('receiptChange');
    const receiptChangeContainer = document.getElementById('receiptChangeContainer');
    const printReceiptBtn = document.getElementById('printReceiptBtn');
    const doneReceiptBtn = document.getElementById('doneReceiptBtn');
    const closeReceiptModal = document.getElementById('closeReceiptModal');
    
    // Popup Modal Elements
    const popupModal = document.getElementById('popupModal');
    const popupTitle = document.getElementById('popupTitle');
    const popupMessage = document.getElementById('popupMessage');
    const popupOkBtn = document.getElementById('popupOkBtn');
    const closePopupModal = document.getElementById('closePopupModal');
    
    // Sample data
    const menuItems = {
        drinks: [
            { id: 1, name: "Americano", price: 100, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
            { id: 2, name: "Cappuccino", price: 120, image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
            { id: 3, name: "Latte", price: 130, image: "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
            { id: 4, name: "Mocha", price: 140, image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }
        ],
        foods: [
            { id: 5, name: "Croissant", price: 80, image: "https://images.unsplash.com/photo-1555507036-ab794f27d2e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
            { id: 6, name: "Sandwich", price: 150, image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
            { id: 7, name: "Muffin", price: 70, image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
            { id: 8, name: "Salad", price: 120, image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
            { id: 9, name: "Chocolate Cake", price: 160, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
            { id: 10, name: "Apple Pie", price: 140, image: "https://images.unsplash.com/photo-1535920527002-b35e96722206?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
            { id: 11, name: "Cheesecake", price: 180, image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
            { id: 12, name: "Cinnamon Roll", price: 90, image: "https://images.unsplash.com/photo-1558315955-d5f8c2f8b06c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }
        ],
    };
    
    // Ingredients data
    let ingredients = [
        { id: 1, name: "Coffee Beans", quantity: 5, unit: "kg", status: "In Stock" },
        { id: 2, name: "Milk", quantity: 8, unit: "liters", status: "In Stock" },
        { id: 3, name: "Sugar", quantity: 2, unit: "kg", status: "Low Stock" },
        { id: 4, name: "Bread", quantity: 0, unit: "pieces", status: "Out of Stock" },
        { id: 5, name: "Eggs", quantity: 12, unit: "pieces", status: "In Stock" },
        { id: 6, name: "Butter", quantity: 1, unit: "kg", status: "Low Stock" }
    ];
    
    // Cashiers data
    let cashiers = [
        { id: 1, name: "Bernard Sagon", idNumber: "CSH001", username: "bernard", password: "pass123" },
        { id: 2, name: "Joshua Garcia", idNumber: "CSH002", username: "joshua", password: "pass123" },
        { id: 3, name: "Dominic Dulatre", idNumber: "CSH003", username: "dominic", password: "pass123" },
        { id: 4, name: "Jerald Crescencio", idNumber: "CSH004", username: "jerald", password: "pass123" }
    ];
    
    // Sales history data
    let salesHistory = [
        { id: "ORD-001", cashierId: 1, cashierName: "Bernard Sagon", date: new Date(2023, 10, 15, 10, 30), items: "Americano, Sandwich", total: 270, paymentMethod: "Cash" },
        { id: "ORD-002", cashierId: 2, cashierName: "Joshua Garcia", date: new Date(2023, 10, 15, 10, 45), items: "Cappuccino", total: 120, paymentMethod: "GCash" },
        { id: "ORD-003", cashierId: 3, cashierName: "Dominic Dulatre", date: new Date(2023, 10, 15, 11, 15), items: "Latte, Muffin", total: 200, paymentMethod: "Visa" },
        { id: "ORD-004", cashierId: 1, cashierName: "Bernard Sagon", date: new Date(2023, 10, 15, 11, 30), items: "Mocha, Croissant", total: 220, paymentMethod: "PayMaya" },
        { id: "ORD-005", cashierId: 4, cashierName: "Jerald Crescencio", date: new Date(2023, 10, 14, 9, 15), items: "Americano, Salad", total: 220, paymentMethod: "Cash" },
        { id: "ORD-006", cashierId: 2, cashierName: "Joshua Garcia", date: new Date(2023, 10, 14, 14, 20), items: "Cappuccino, Sandwich", total: 270, paymentMethod: "GCash" }
    ];
    
    let cart = [];
    let currentCategory = 'drinks';
    let totalAmount = 0;
    let changeAmount = 0;
    let currentOrderId = '';
    let selectedPaymentMethod = '';
    let currentCashier = null;
    let editingIngredientId = null;
    let editingCashierId = null;

    // Popup Modal Functions
    function showPopup(title, message) {
        popupTitle.textContent = title;
        popupMessage.textContent = message;
        popupModal.style.display = 'flex';
    }

    function hidePopup() {
        popupModal.style.display = 'none';
    }

    // Popup Event Listeners
    popupOkBtn.addEventListener('click', hidePopup);
    closePopupModal.addEventListener('click', hidePopup);

    // Close popup when clicking outside
    popupModal.addEventListener('click', function(e) {
        if (e.target === popupModal) {
            hidePopup();
        }
    });

    // Role Selection
    cashierBtn.addEventListener('click', () => {
        roleSelection.style.display = 'none';
        cashierLogin.style.display = 'flex';
    });

    ownerBtn.addEventListener('click', () => {
        roleSelection.style.display = 'none';
        ownerLogin.style.display = 'flex';
    });

    // Back buttons
    backFromCashier.addEventListener('click', () => {
        cashierLogin.style.display = 'none';
        roleSelection.style.display = 'flex';
    });

    backFromOwner.addEventListener('click', () => {
        ownerLogin.style.display = 'none';
        roleSelection.style.display = 'flex';
    });

    // Cashier Login - Accept any username/password
    cashierLoginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const userName = document.getElementById('cashierName').value.trim();
        const password = document.getElementById('cashierPassword').value.trim();
        
        // Accept any username and password for testing
        if (userName && password) {
            currentCashier = { 
                id: Math.floor(Math.random() * 1000) + 1, 
                name: userName 
            };
            displayCashierName.textContent = userName;
            cashierLogin.style.display = 'none';
            posSystem.style.display = 'flex';
            loadMenu(currentCategory);
            loadCashierSalesHistory();
            cashierLoginForm.reset();
        } else {
            showPopup('Login Error', 'Please enter both username and password');
        }
    });

    // Owner Login - Accept any username/password
    ownerLoginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const userName = document.getElementById('ownerName').value.trim();
        const password = document.getElementById('ownerPassword').value.trim();
        
        // Accept any username and password for testing
        if (userName && password) {
            displayOwnerName.textContent = userName;
            ownerLogin.style.display = 'none';
            ownerDashboard.style.display = 'flex';
            loadDashboard();
            ownerLoginForm.reset();
        } else {
            showPopup('Login Error', 'Please enter both username and password');
        }
    });

    // Load menu items for Cashier
    function loadMenu(category) {
        menuGrid.innerHTML = '';
        
        if (category === 'sales-history') {
            // Show sales history instead of menu items
            cashierSalesHistory.style.display = 'block';
            return;
        } else {
            cashierSalesHistory.style.display = 'none';
        }
        
        // Check if the category exists in menuItems
        if (!menuItems[category]) {
            menuGrid.innerHTML = '<div class="empty-cart">No items available in this category</div>';
            return;
        }
        
        menuItems[category].forEach(item => {
            const menuItemElement = document.createElement('div');
            menuItemElement.className = 'menu-item';
            menuItemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <div class="price">P${item.price}</div>
            `;
            
            menuItemElement.addEventListener('click', () => addToCart(item));
            menuGrid.appendChild(menuItemElement);
        });
    }

    // Category tab switching
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            currentCategory = tab.getAttribute('data-category');
            loadMenu(currentCategory);
        });
    });

    // Load cashier sales history
    function loadCashierSalesHistory() {
        if (!currentCashier) return;
        
        const today = new Date();
        const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        const filterValue = cashierDateFilter.value;
        
        let filteredSales = salesHistory.filter(sale => sale.cashierId === currentCashier.id);
        
        // Apply date filter
        if (filterValue === 'today') {
            filteredSales = filteredSales.filter(sale => sale.date >= todayStart);
        } else if (filterValue === 'week') {
            const weekAgo = new Date(today);
            weekAgo.setDate(today.getDate() - 7);
            filteredSales = filteredSales.filter(sale => sale.date >= weekAgo);
        } else if (filterValue === 'month') {
            const monthAgo = new Date(today);
            monthAgo.setMonth(today.getMonth() - 1);
            filteredSales = filteredSales.filter(sale => sale.date >= monthAgo);
        }
        // 'all' shows all sales
        
        // Update stats
        const todaySales = filteredSales.filter(sale => sale.date >= todayStart);
        const todayTotal = todaySales.reduce((sum, sale) => sum + sale.total, 0);
        const todayOrderCount = todaySales.length;
        const avgTodayOrder = todayOrderCount > 0 ? todayTotal / todayOrderCount : 0;
        
        cashierTodaySales.textContent = `P${todayTotal}`;
        cashierTodayOrders.textContent = todayOrderCount;
        cashierAvgOrder.textContent = `P${Math.round(avgTodayOrder)}`;
        
        // Update sales table
        cashierSalesTable.innerHTML = '';
        filteredSales.forEach(sale => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${sale.id}</td>
                <td>${sale.date.toLocaleString()}</td>
                <td>${sale.items}</td>
                <td>P${sale.total}</td>
                <td>${sale.paymentMethod}</td>
            `;
            cashierSalesTable.appendChild(row);
        });
        
        if (filteredSales.length === 0) {
            cashierSalesTable.innerHTML = `
                <tr>
                    <td colspan="5" style="text-align: center; color: var(--text-light); padding: 20px;">
                        No sales found for the selected period
                    </td>
                </tr>
            `;
        }
    }
    
    // Add item to cart
    function addToCart(item) {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: 1
            });
        }
        
        updateCartDisplay();
    }

    // Update cart display
    function updateCartDisplay() {
        cartItems.innerHTML = '';
        
        if (cart.length === 0) {
            cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
            totalPriceElement.textContent = 'P0';
            amountDueElement.textContent = 'P0';
            totalAmount = 0;
            return;
        }
        
        totalAmount = 0;
        
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            totalAmount += itemTotal;
            
            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'cart-item';
            cartItemElement.innerHTML = `
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">P${item.price} x ${item.quantity}</div>
                </div>
                <div class="cart-item-controls">
                    <button class="decrease-btn" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="increase-btn" data-id="${item.id}">+</button>
                </div>
            `;
            
            cartItems.appendChild(cartItemElement);
        });
        
        // Update totals
        totalPriceElement.textContent = `P${totalAmount}`;
        amountDueElement.textContent = `P${totalAmount}`;
        
        // Add event listeners to quantity buttons
        document.querySelectorAll('.increase-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const id = parseInt(e.target.getAttribute('data-id'));
                increaseQuantity(id);
            });
        });
        
        document.querySelectorAll('.decrease-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const id = parseInt(e.target.getAttribute('data-id'));
                decreaseQuantity(id);
            });
        });
    }

    // Increase item quantity
    function increaseQuantity(id) {
        const item = cart.find(item => item.id === id);
        if (item) {
            item.quantity += 1;
            updateCartDisplay();
        }
    }

    // Decrease item quantity
    function decreaseQuantity(id) {
        const itemIndex = cart.findIndex(item => item.id === id);
        if (itemIndex !== -1) {
            if (cart[itemIndex].quantity > 1) {
                cart[itemIndex].quantity -= 1;
            } else {
                cart.splice(itemIndex, 1);
            }
            updateCartDisplay();
        }
    }

    // Checkout button
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            showPopup('Empty Cart', 'Your cart is empty. Please add items before checkout.');
            return;
        }
        
        // Show payment modal
        paymentModal.style.display = 'flex';
        selectedPaymentMethod = '';
        paymentMethods.forEach(method => method.classList.remove('active'));
        paymentDetails.forEach(detail => detail.classList.remove('active'));
        cashAmountInput.value = '';
        changeAmountElement.textContent = 'P0';
    });

    // Payment method selection
    paymentMethods.forEach(method => {
        method.addEventListener('click', () => {
            paymentMethods.forEach(m => m.classList.remove('active'));
            method.classList.add('active');
            
            selectedPaymentMethod = method.getAttribute('data-method');
            
            // Show corresponding payment details
            paymentDetails.forEach(detail => detail.classList.remove('active'));
            document.getElementById(`${selectedPaymentMethod}Details`).classList.add('active');
            
            // Auto-calculate change for cash payment
            if (selectedPaymentMethod === 'cash') {
                calculateChange();
            }
        });
    });

    // Calculate change for cash payment
    function calculateChange() {
        const cashAmount = parseFloat(cashAmountInput.value) || 0;
        changeAmount = cashAmount - totalAmount;
        changeAmountElement.textContent = `P${changeAmount >= 0 ? changeAmount : 0}`;
    }

    // Update change when cash amount changes
    cashAmountInput.addEventListener('input', calculateChange);

    // Confirm payment
    confirmPaymentBtn.addEventListener('click', () => {
        if (!selectedPaymentMethod) {
            showPopup('Payment Method Required', 'Please select a payment method to continue.');
            return;
        }
        
        // Validate payment details
        if (selectedPaymentMethod === 'cash') {
            const cashAmount = parseFloat(cashAmountInput.value) || 0;
            changeAmount = cashAmount - totalAmount;
            
            if (cashAmount === 0 || isNaN(cashAmount)) {
                showPopup('Invalid Amount', 'Please enter a valid cash amount.');
                return;
            }
            
            if (changeAmount < 0) {
                showPopup('Insufficient Cash', 'The cash amount is insufficient for this transaction.');
                return;
            }
        } else if (selectedPaymentMethod === 'gcash') {
            const gcashNumber = document.getElementById('gcashNumber').value.trim();
            const gcashReference = document.getElementById('gcashReference').value.trim();
            
            if (!gcashNumber || !gcashReference) {
                showPopup('GCash Details Required', 'Please fill in all GCash details to continue.');
                return;
            }
        } else if (selectedPaymentMethod === 'paymaya') {
            const paymayaNumber = document.getElementById('paymayaNumber').value.trim();
            const paymayaReference = document.getElementById('paymayaReference').value.trim();
            
            if (!paymayaNumber || !paymayaReference) {
                showPopup('PayMaya Details Required', 'Please fill in all PayMaya details to continue.');
                return;
            }
        } else if (selectedPaymentMethod === 'visa') {
            const cardNumber = document.getElementById('cardNumber').value.trim();
            const expiryDate = document.getElementById('expiryDate').value.trim();
            const cvv = document.getElementById('cvv').value.trim();
            
            if (!cardNumber || !expiryDate || !cvv) {
                showPopup('Card Details Required', 'Please fill in all Visa card details to continue.');
                return;
            }
        }
        
        // Generate order ID
        currentOrderId = 'ORD-' + Math.floor(1000 + Math.random() * 9000);
        
        // Add to sales history
        const newSale = {
            id: currentOrderId,
            cashierId: currentCashier.id,
            cashierName: currentCashier.name,
            date: new Date(),
            items: cart.map(item => `${item.name} x${item.quantity}`).join(', '),
            total: totalAmount,
            paymentMethod: selectedPaymentMethod
        };
        
        salesHistory.push(newSale);
        
        // Show receipt
        showReceipt(totalAmount, changeAmount, selectedPaymentMethod);
        
        // Close payment modal
        paymentModal.style.display = 'none';
    });

    // Cancel payment
    cancelPaymentBtn.addEventListener('click', () => {
        paymentModal.style.display = 'none';
    });

    // Close payment modal
    closePaymentModal.addEventListener('click', () => {
        paymentModal.style.display = 'none';
    });

    // Show receipt
    function showReceipt(total, change, paymentMethod) {
        // Set receipt date
        const now = new Date();
        receiptDate.textContent = now.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        // Set order ID
        receiptOrderId.textContent = `Order ID: ${currentOrderId}`;
        
        // Set payment method
        receiptPaymentMethod.textContent = `Payment Method: ${paymentMethod.toUpperCase()}`;
        
        // Set cashier name
        receiptCashier.textContent = `Cashier: ${currentCashier.name}`;
        
        // Show/hide change based on payment method
        if (paymentMethod === 'cash') {
            receiptChangeContainer.style.display = 'flex';
            receiptChange.textContent = `P${change}`;
        } else {
            receiptChangeContainer.style.display = 'none';
        }
        
        // Populate receipt items
        receiptBody.innerHTML = '';
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'receipt-item';
            itemElement.innerHTML = `
                <span>${item.name} x${item.quantity}</span>
                <span>P${item.price * item.quantity}</span>
            `;
            receiptBody.appendChild(itemElement);
        });
        
        // Set receipt total
        receiptTotal.textContent = `P${total}`;
        
        // Show receipt modal
        receiptModal.style.display = 'flex';
    }

    // Print receipt
    printReceiptBtn.addEventListener('click', () => {
        window.print();
    });

    // Done with receipt
    doneReceiptBtn.addEventListener('click', () => {
        // Clear cart
        cart = [];
        updateCartDisplay();
        
        // Reload sales history to show new sale
        loadCashierSalesHistory();
        
        // Close receipt modal
        receiptModal.style.display = 'none';
    });

    // Close receipt modal
    closeReceiptModal.addEventListener('click', () => {
        receiptModal.style.display = 'none';
    });

    // Owner Dashboard Navigation
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            sidebarLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            contentSections.forEach(section => section.classList.remove('active'));
            
            const sectionId = link.getAttribute('data-section');
            document.getElementById(sectionId).classList.add('active');
            
            // Load specific data when switching sections
            if (sectionId === 'sales-history') {
                loadSalesHistory();
            } else if (sectionId === 'ingredients') {
                loadIngredientsStock();
            } else if (sectionId === 'cashiers') {
                loadCashiersList();
            } else if (sectionId === 'item-menu') {
                loadMenuList();
            }
        });
    });

    // Load dashboard data
    function loadDashboard() {
        // Load recent orders
        loadRecentOrders();
        
        // Load sales history filters
        loadSalesHistoryFilters();
        
        // Load sales history
        loadSalesHistory();
        
        // Load ingredients stock
        loadIngredientsStock();
        
        // Load cashiers list
        loadCashiersList();
        
        // Load menu list
        loadMenuList();
    }

    // Load recent orders
    function loadRecentOrders() {
        recentOrdersElement.innerHTML = '';
        
        // Get 5 most recent orders
        const recentSales = [...salesHistory]
            .sort((a, b) => b.date - a.date)
            .slice(0, 5);
        
        recentSales.forEach(order => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${order.id}</td>
                <td>${order.cashierName}</td>
                <td>${order.items}</td>
                <td>P${order.total}</td>
                <td>${order.date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</td>
                <td>${order.paymentMethod}</td>
            `;
            recentOrdersElement.appendChild(row);
        });
    }

    // Load sales history filters
    function loadSalesHistoryFilters() {
        // Populate cashier filter
        cashierFilter.innerHTML = '<option value="all">All Cashiers</option>';
        const uniqueCashiers = [...new Set(salesHistory.map(sale => sale.cashierName))];
        uniqueCashiers.forEach(cashier => {
            const option = document.createElement('option');
            option.value = cashier;
            option.textContent = cashier;
            cashierFilter.appendChild(option);
        });
        
        // Add event listeners to filters
        dateFilter.addEventListener('change', loadSalesHistory);
        cashierFilter.addEventListener('change', loadSalesHistory);
        paymentFilter.addEventListener('change', loadSalesHistory);
    }

    // Load sales history
    function loadSalesHistory() {
        const dateFilterValue = dateFilter.value;
        const cashierFilterValue = cashierFilter.value;
        const paymentFilterValue = paymentFilter.value;
        
        let filteredSales = [...salesHistory];
        
        // Apply date filter
        const today = new Date();
        if (dateFilterValue === 'today') {
            const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
            filteredSales = filteredSales.filter(sale => sale.date >= todayStart);
        } else if (dateFilterValue === 'week') {
            const weekAgo = new Date(today);
            weekAgo.setDate(today.getDate() - 7);
            filteredSales = filteredSales.filter(sale => sale.date >= weekAgo);
        } else if (dateFilterValue === 'month') {
            const monthAgo = new Date(today);
            monthAgo.setMonth(today.getMonth() - 1);
            filteredSales = filteredSales.filter(sale => sale.date >= monthAgo);
        }
        // 'all' shows all sales
        
        // Apply cashier filter
        if (cashierFilterValue !== 'all') {
            filteredSales = filteredSales.filter(sale => sale.cashierName === cashierFilterValue);
        }
        
        // Apply payment filter
        if (paymentFilterValue !== 'all') {
            filteredSales = filteredSales.filter(sale => sale.paymentMethod.toLowerCase() === paymentFilterValue);
        }
        
        // Update stats
        const totalRevenueValue = filteredSales.reduce((sum, sale) => sum + sale.total, 0);
        const totalOrdersValue = filteredSales.length;
        const avgOrderValue = totalOrdersValue > 0 ? totalRevenueValue / totalOrdersValue : 0;
        
        // Find best cashier
        const cashierSales = {};
        filteredSales.forEach(sale => {
            if (!cashierSales[sale.cashierName]) {
                cashierSales[sale.cashierName] = 0;
            }
            cashierSales[sale.cashierName] += sale.total;
        });
        
        let bestCashierName = 'None';
        let bestCashierSales = 0;
        for (const [name, sales] of Object.entries(cashierSales)) {
            if (sales > bestCashierSales) {
                bestCashierSales = sales;
                bestCashierName = name;
            }
        }
        
        totalRevenue.textContent = `P${totalRevenueValue}`;
        totalOrders.textContent = totalOrdersValue;
        avgOrder.textContent = `P${Math.round(avgOrderValue)}`;
        bestCashier.textContent = bestCashierName;
        
        // Update sales table
        salesHistoryTable.innerHTML = '';
        filteredSales.forEach(sale => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${sale.id}</td>
                <td>${sale.cashierName}</td>
                <td>${sale.date.toLocaleString()}</td>
                <td>${sale.items}</td>
                <td>P${sale.total}</td>
                <td>${sale.paymentMethod}</td>
            `;
            salesHistoryTable.appendChild(row);
        });
        
        if (filteredSales.length === 0) {
            salesHistoryTable.innerHTML = `
                <tr>
                    <td colspan="6" style="text-align: center; color: var(--text-light); padding: 20px;">
                        No sales found for the selected filters
                    </td>
                </tr>
            `;
        }
    }

    // Load ingredients stock
    function loadIngredientsStock() {
        ingredientsStockTable.innerHTML = '';
        
        ingredients.forEach(ingredient => {
            const row = document.createElement('tr');
            let statusClass = '';
            if (ingredient.status === 'In Stock') statusClass = 'stock-in';
            else if (ingredient.status === 'Low Stock') statusClass = 'stock-low';
            else if (ingredient.status === 'Out of Stock') statusClass = 'stock-out';
            
            row.innerHTML = `
                <td>${ingredient.name}</td>
                <td>${ingredient.quantity}</td>
                <td>${ingredient.unit}</td>
                <td><span class="stock-status ${statusClass}">${ingredient.status}</span></td>
                <td>
                    <button class="action-btn edit-ingredient" data-id="${ingredient.id}">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="action-btn delete delete-ingredient" data-id="${ingredient.id}">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </td>
            `;
            ingredientsStockTable.appendChild(row);
        });
        
        // Add event listeners to edit and delete buttons
        document.querySelectorAll('.edit-ingredient').forEach(button => {
            button.addEventListener('click', (e) => {
                const id = parseInt(e.target.closest('button').getAttribute('data-id'));
                editIngredient(id);
            });
        });
        
        document.querySelectorAll('.delete-ingredient').forEach(button => {
            button.addEventListener('click', (e) => {
                const id = parseInt(e.target.closest('button').getAttribute('data-id'));
                deleteIngredient(id);
            });
        });
    }

    // Edit ingredient
    function editIngredient(id) {
        const ingredient = ingredients.find(ing => ing.id === id);
        if (ingredient) {
            document.getElementById('ingredientName').value = ingredient.name;
            document.getElementById('ingredientQuantity').value = ingredient.quantity;
            document.getElementById('ingredientUnit').value = ingredient.unit;
            document.getElementById('ingredientStatus').value = ingredient.status;
            editingIngredientId = id;
            
            // Change button text
            saveIngredientBtn.innerHTML = '<i class="fas fa-save"></i> Update Ingredient';
        }
    }

    // Delete ingredient
    function deleteIngredient(id) {
        if (confirm('Are you sure you want to delete this ingredient?')) {
            ingredients = ingredients.filter(ing => ing.id !== id);
            loadIngredientsStock();
        }
    }

    // Save ingredient
    saveIngredientBtn.addEventListener('click', () => {
        const name = document.getElementById('ingredientName').value.trim();
        const quantity = parseFloat(document.getElementById('ingredientQuantity').value);
        const unit = document.getElementById('ingredientUnit').value;
        const status = document.getElementById('ingredientStatus').value;
        
        if (!name || isNaN(quantity) || !unit) {
            showPopup('Form Error', 'Please fill in all fields correctly.');
            return;
        }
        
        if (editingIngredientId) {
            // Update existing ingredient
            const index = ingredients.findIndex(ing => ing.id === editingIngredientId);
            if (index !== -1) {
                ingredients[index] = {
                    ...ingredients[index],
                    name,
                    quantity,
                    unit,
                    status
                };
            }
            editingIngredientId = null;
            saveIngredientBtn.innerHTML = '<i class="fas fa-plus"></i> Add Ingredient';
        } else {
            // Add new ingredient
            const newId = ingredients.length > 0 ? Math.max(...ingredients.map(ing => ing.id)) + 1 : 1;
            ingredients.push({
                id: newId,
                name,
                quantity,
                unit,
                status
            });
        }
        
        loadIngredientsStock();
        clearIngredientForm();
    });

    // Clear ingredient form
    clearIngredientFormBtn.addEventListener('click', clearIngredientForm);
    
    function clearIngredientForm() {
        document.getElementById('ingredientName').value = '';
        document.getElementById('ingredientQuantity').value = '';
        document.getElementById('ingredientUnit').value = '';
        document.getElementById('ingredientStatus').value = 'In Stock';
        editingIngredientId = null;
        saveIngredientBtn.innerHTML = '<i class="fas fa-plus"></i> Add Ingredient';
    }

    // Load cashiers list
    function loadCashiersList() {
        const cashiersList = document.getElementById('cashiersList');
        cashiersList.innerHTML = '';
        
        cashiers.forEach(cashier => {
            const cashierCard = document.createElement('div');
            cashierCard.className = 'dashboard-card';
            const cashierSales = salesHistory.filter(sale => sale.cashierName === cashier.name);
            const totalSales = cashierSales.reduce((sum, sale) => sum + sale.total, 0);
            
            cashierCard.innerHTML = `
                <h3>${cashier.name}</h3>
                <div class="form-row">
                    <div class="form-group-half">
                        <p><strong>ID Number:</strong> ${cashier.idNumber}</p>
                        <p><strong>Username:</strong> ${cashier.username}</p>
                    </div>
                    <div class="form-group-half">
                        <p><strong>Total Sales:</strong> P${totalSales}</p>
                        <p><strong>Total Orders:</strong> ${cashierSales.length}</p>
                    </div>
                </div>
                <div class="cashier-actions">
                    <button class="action-btn edit-cashier" data-id="${cashier.id}">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="action-btn delete delete-cashier" data-id="${cashier.id}">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            `;
            cashiersList.appendChild(cashierCard);
        });
        
        // Add event listeners to cashier action buttons
        document.querySelectorAll('.edit-cashier').forEach(button => {
            button.addEventListener('click', (e) => {
                const id = parseInt(e.target.closest('button').getAttribute('data-id'));
                editCashier(id);
            });
        });
        
        document.querySelectorAll('.delete-cashier').forEach(button => {
            button.addEventListener('click', (e) => {
                const id = parseInt(e.target.closest('button').getAttribute('data-id'));
                deleteCashier(id);
            });
        });
    }

    // Add new cashier
    saveCashierBtn.addEventListener('click', () => {
        const name = document.getElementById('newCashierName').value.trim();
        const idNumber = document.getElementById('newCashierIdNumber').value.trim();
        const username = document.getElementById('newCashierUsername').value.trim();
        const password = document.getElementById('newCashierPassword').value.trim();
        
        if (!name || !idNumber || !username || !password) {
            showPopup('Form Error', 'Please fill in all fields.');
            return;
        }
        
        // Check if username already exists (excluding current editing cashier)
        if (cashiers.some(cashier => cashier.username === username && cashier.id !== editingCashierId)) {
            showPopup('Error', 'Username already exists. Please choose a different username.');
            return;
        }
        
        if (editingCashierId) {
            // Update existing cashier
            const index = cashiers.findIndex(c => c.id === editingCashierId);
            if (index !== -1) {
                cashiers[index] = {
                    ...cashiers[index],
                    name,
                    idNumber,
                    username,
                    password
                };
            }
            editingCashierId = null;
            saveCashierBtn.innerHTML = '<i class="fas fa-plus"></i> Add Cashier';
        } else {
            // Add new cashier
            const newId = cashiers.length > 0 ? Math.max(...cashiers.map(c => c.id)) + 1 : 1;
            cashiers.push({
                id: newId,
                name,
                idNumber,
                username,
                password
            });
        }
        
        loadCashiersList();
        clearCashierForm();
        showPopup('Success', editingCashierId ? 'Cashier updated successfully!' : 'Cashier added successfully!');
    });

    // Edit cashier
    function editCashier(id) {
        const cashier = cashiers.find(c => c.id === id);
        if (cashier) {
            document.getElementById('newCashierName').value = cashier.name;
            document.getElementById('newCashierIdNumber').value = cashier.idNumber;
            document.getElementById('newCashierUsername').value = cashier.username;
            document.getElementById('newCashierPassword').value = cashier.password;
            
            editingCashierId = id;
            saveCashierBtn.innerHTML = '<i class="fas fa-save"></i> Update Cashier';
        }
    }

    // Delete cashier
    function deleteCashier(id) {
        if (confirm('Are you sure you want to delete this cashier?')) {
            cashiers = cashiers.filter(c => c.id !== id);
            loadCashiersList();
        }
    }

    // Clear cashier form
    clearCashierFormBtn.addEventListener('click', clearCashierForm);
    
    function clearCashierForm() {
        document.getElementById('newCashierName').value = '';
        document.getElementById('newCashierIdNumber').value = '';
        document.getElementById('newCashierUsername').value = '';
        document.getElementById('newCashierPassword').value = '';
        editingCashierId = null;
        saveCashierBtn.innerHTML = '<i class="fas fa-plus"></i> Add Cashier';
    }

    // Load menu list
    function loadMenuList() {
        const menuList = document.getElementById('menuList');
        if (!menuList) return;
        menuList.innerHTML = '';

        const allItems = [
            ...(menuItems.drinks || []).map(i => ({ ...i, _category: 'drinks' })),
            ...(menuItems.foods || []).map(i => ({ ...i, _category: 'foods' })),
            ...(menuItems.pastries || []).map(i => ({ ...i, _category: 'pastries' }))
        ];

        if (allItems.length === 0) {
            menuList.innerHTML = `<div class="empty-list" style="color: var(--text-light); padding: 20px;">No menu items available</div>`;
            return;
        }

        allItems.forEach(item => {
            const row = document.createElement('div');
            row.className = 'dashboard-card menu-item-row';
            row.innerHTML = `
                <div style="flex:1">
                    <h3 style="margin:0">${item.name}</h3>
                    <p style="margin:6px 0;color:var(--text-light)">P${item.price} • ${item._category.charAt(0).toUpperCase() + item._category.slice(1)}</p>
                    <img src="${item.image}" alt="${item.name}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 4px; margin-top: 8px;">
                </div>
                <div style="display:flex;gap:8px;align-items:center">
                    <button class="action-btn edit-menu" data-id="${item.id}" data-cat="${item._category}">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="action-btn delete delete-menu" data-id="${item.id}" data-cat="${item._category}">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            `;
            menuList.appendChild(row);
        });

        // Wire up edit buttons
        document.querySelectorAll('.edit-menu').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(btn.getAttribute('data-id'));
                const cat = btn.getAttribute('data-cat');
                const item = (menuItems[cat] || []).find(i => i.id === id);
                if (!item) return;

                // Enhanced editing with image support
                const newName = prompt('Edit item name:', item.name);
                if (newName === null) return;
                
                const newPrice = parseFloat(prompt('Edit price:', item.price));
                if (isNaN(newPrice)) { showPopup('Error', 'Invalid price'); return; }
                
                const newImage = prompt('Edit image URL:', item.image || '');
                if (newImage === null) return;

                // Apply changes
                item.name = newName.trim();
                item.price = newPrice;
                if (newImage.trim() !== '') {
                    item.image = newImage.trim();
                }
                
                loadMenuList();
                // If cashier view is showing this category, reload it
                if (currentCategory === cat) {
                    loadMenu(currentCategory);
                }
                showPopup('Success', 'Menu item updated successfully!');
            });
        });

        // Wire up delete buttons
        document.querySelectorAll('.delete-menu').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(btn.getAttribute('data-id'));
                const cat = btn.getAttribute('data-cat');
                if (!confirm('Delete this menu item?')) return;
                menuItems[cat] = (menuItems[cat] || []).filter(i => i.id !== id);
                loadMenuList();
                if (currentCategory === cat) loadMenu(currentCategory);
            });
        });
    }

    // Add new menu item
    saveItemBtn.addEventListener('click', () => {
        const name = document.getElementById('newItemName').value.trim();
        const price = parseFloat(document.getElementById('newItemPrice').value);
        const category = document.getElementById('newItemCategory').value;
        
        if (!name || isNaN(price) || !category) {
            showPopup('Form Error', 'Please fill in all fields correctly.');
            return;
        }
        
        // Generate new ID
        const allIds = Object.values(menuItems).flat().map(i => i.id || 0);
        const newId = allIds.length ? Math.max(...allIds) + 1 : 1;
        
        // Add to appropriate category
        if (!menuItems[category]) {
            menuItems[category] = [];
        }
        
        menuItems[category].push({
            id: newId,
            name: name.trim(),
            price: price,
            image: "https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" // Default image
        });
        
        loadMenuList();
        clearItemForm();
        showPopup('Success', `${name} added to ${category}!`);
        
        // If cashier is currently viewing the same category, reload their menu
        if (currentCategory === category && posSystem.style.display === 'flex') {
            loadMenu(currentCategory);
        }
    });

    // Clear item form
    clearItemFormBtn.addEventListener('click', clearItemForm);
    
    function clearItemForm() {
        document.getElementById('newItemName').value = '';
        document.getElementById('newItemPrice').value = '';
        document.getElementById('newItemCategory').value = 'drinks';
    }

    // Cashier date filter change
    cashierDateFilter.addEventListener('change', loadCashierSalesHistory);

    // Logout buttons
    logoutBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to logout?')) {
            cart = [];
            currentCashier = null;
            updateCartDisplay();
            posSystem.style.display = 'none';
            roleSelection.style.display = 'flex';
        }
    });

    ownerLogoutBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to logout?')) {
            ownerDashboard.style.display = 'none';
            roleSelection.style.display = 'flex';
        }
    });

    // Initialize
    loadMenu(currentCategory);
});