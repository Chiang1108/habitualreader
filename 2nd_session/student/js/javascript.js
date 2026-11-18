document.addEventListener("DOMContentLoaded", function () {
    let logoLink = document.getElementById("logo-link");
    let homeTab = document.getElementById("pills-home-tab");

    if (logoLink && homeTab) {
        function goToHome(event) {
            event.preventDefault(); // 防止頁面重新載入
            
            // **使用 Bootstrap 提供的方法來切換頁籤**
            let tab = new bootstrap.Tab(homeTab);
            tab.show();
        }

        // **桌機版**
        logoLink.addEventListener("click", goToHome);

        // **手機/平板**
        logoLink.addEventListener("touchstart", goToHome);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // 監聽 Bootstrap 的分頁切換事件
    document.addEventListener("shown.bs.tab", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // 平滑滾動到最上方
        });
    });
});

// ==========================小螢幕選單================================
document.addEventListener("DOMContentLoaded", function () {
    let menuBtn = document.querySelector(".menu-btn");
    let mobileMenu = document.getElementById("mobile-menu");
    let navLinks = document.querySelectorAll("#mobile-menu .nav-link"); // 取得所有漢堡選單內的按鈕

    // 點擊漢堡選單按鈕時，顯示或隱藏選單
    menuBtn.addEventListener("click", function (event) {
        event.stopPropagation(); // 防止事件冒泡影響
        let isHidden = mobileMenu.classList.contains("d-none");

        if (isHidden) {
            mobileMenu.classList.remove("d-none");
            mobileMenu.classList.add("d-flex");
        } else {
            mobileMenu.classList.add("d-none");
            mobileMenu.classList.remove("d-flex");
        }

        // 確保畫面不會因為選單影響寬度
        document.body.style.overflowX = mobileMenu.classList.contains("d-none") ? "hidden" : "auto";
    });

    // 點擊選單項目後，切換內容並強制關閉漢堡選單
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            let targetTab = this.getAttribute("data-bs-target"); // 取得對應的 tab 內容

            if (targetTab) {
                let tabElement = document.querySelector(targetTab);
                if (tabElement) {
                    let tab = new bootstrap.Tab(tabElement);
                    tab.show();
                }
            }

            // **確保選單收起**
            mobileMenu.classList.add("d-none");
            mobileMenu.classList.remove("d-flex");

            // **確保按鈕也隱藏**
            menuBtn.classList.remove("active");

            // **確保畫面不會產生橫向滾動**
            document.body.style.overflowX = "hidden";
        });
    });

    // **點擊頁面其他地方時，自動關閉漢堡選單**
    document.addEventListener("click", function (event) {
        let isClickInsideMenu = mobileMenu.contains(event.target);
        let isClickOnButton = menuBtn.contains(event.target);

        if (!isClickInsideMenu && !isClickOnButton) {
            mobileMenu.classList.add("d-none");
            mobileMenu.classList.remove("d-flex");
        }
    });

    // **監聽 Bootstrap 的分頁切換事件，確保選單關閉**
    document.addEventListener("shown.bs.tab", function () {
        mobileMenu.classList.add("d-none");
        mobileMenu.classList.remove("d-flex");
    });
});





// ==============================規劃書單================================

document.addEventListener("DOMContentLoaded", function () {
    let tableRows = document.querySelectorAll(".table tbody tr");

    tableRows.forEach(row => {
        let categoryCell = row.querySelector(".category");

        if (categoryCell) {
            let categories = categoryCell.querySelectorAll("div"); // 取得所有 `<div>`

            if (categories.length > 1) {
                categoryCell.classList.add("multi"); // 標記多領域
            } else {
                categoryCell.classList.add("single"); // 單一領域
            }
        }
    });
});




// 書籍資料
// const books = [
//     // =======二/跨/核=========
//     { title: "讓世界更好：創意回收救地球的真實故事", isbn: "9789860641790", group: "grade2", category: ["science","story"], depth: "picture" ,type:"core"},
//     { title: "嘴巴裡的戰爭", isbn: "9789860610222 ", group: "grade2", category: ["science","story"], depth: "bridge" ,type:"core"},
//     { title: "教室裡有鬼― 副衛生股長是骯髒鬼？", isbn: "9789863384151", group: "grade2", category: ["story","humanities"], depth: "bridge",type:"core"},
//     { title: "隱形男孩", isbn: "9789578640931", group: "grade2", category: ["story","humanities"], depth: "bridge",type:"core" },
//     // =======二/科/核=========
//     { title: "一顆海龜蛋的神奇旅程", isbn: "9786263612815", group: "grade2", category: ["science"], depth: "picture",type:"core" },
//     { title: "褲子小偷1：妖怪醫院的人體科學之旅", isbn: "9789576584756", group: "grade2", category: ["science"], depth: "bridge",type:"core" },
//     { title: "救救我們堆滿塑膠的地球", isbn: "9789579125796", group: "grade2", category: ["science"], depth: "picture",type:"core" },
//     { title: "小小建築師：動物界的建築大師", isbn: "9789865072681", group: "grade2", category: ["science"], depth: "picture",type:"core" },
//     // =======二/故/核=========
//     { title: "青蛙和蟾蜍好朋友", isbn: "9789577627964", group: "grade2", category: ["story"], depth: "bridge",type:"core" },
//     { title: "麵包小偷 3: 搞破壞的法國棍子麵包", isbn: "9789865079857", group: "grade2", category: ["story"], depth: "picture",type:"core" },
//     { title: "水公主：喬琪‧巴迪爾的真實故事", isbn: "9789864001750", group: "grade2", category: ["story"], depth: "picture",type:"core" },
//     { title: "老虎先生", isbn: "9789865256265", group: "grade2", category: ["story"], depth: "picture",type:"core" },
//     // =======二/人/核=========
//     { title: "露露和菈菈01：杯子蛋糕的魔力", isbn: "9789575214029", group: "grade2", category: ["humanities"], depth: "bridge",type:"core" },
//     { title: "歷史現場繪本5：馬拉拉的上學路：為平等教育奮鬥的女孩（全新二版）", isbn: "9789864271931", group: "grade2", category: ["humanities"], depth: "picture",type:"core" },
//     { title: "收集色彩的魔術師：迪士尼獨一無二的藝術家瑪莉．布萊爾的神奇世界", isbn: "9789864403752", group: "grade2", category: ["humanities"], depth: "picture",type:"core" },
//     { title: "阿婆的燈籠樹（二版）", isbn: "9786267043011", group: "grade2", category: ["humanities"], depth: "picture",type:"core" },

//     // =======四/跨/核=========
//     { title: "全班共讀：怪咖教室", isbn: "9789577515896", group: "grade4", category: ["story","humanities"], depth: "bridge" ,type:"core"},
//     { title: "晨讀10分鐘：成語故事集", isbn: "9786263057036", group: "grade4", category: ["story","humanities"], depth: "bridge" ,type:"core"},
//     { title: "科學偵探 學校七大不可思議", isbn: "9789865503628", group: "grade4", category: ["story","science"], depth: "beginner"  ,type:"core"},
//     { title: "超級阿伯：和大自然對話的現代農夫", isbn: "9789575709570", group: "grade4", category:  ["story","science"], depth: "beginner"  ,type:"core"},
//     // =======四/科/核=========
//     { title: "一起搶救大堡礁：為什麼一定要保護地球", isbn: "9786263076488", group: "grade4", category: ["science"], depth: "bridge" ,type:"core"},
//     { title: "台灣生態尋寶趣【自然探索版】", isbn: "9786267352267", group: "grade4", category: ["science"], depth: "bridge" ,type:"core"},
//     { title: "恐龍、藍菌和更古老的生命", isbn: "9789571472119", group: "grade4", category: ["science"], depth: "bridge" ,type:"core"},
//     { title: "數感小學冒險系列1：不可思「億」巧克力工廠", isbn: "9789575035730", group: "grade4", category: ["science"], depth: "bridge" ,type:"core"},
//     // =======四/故/核=========
//     { title: "安德魯克萊門斯系列-我的阿富汗筆友", isbn: "9789573297901", group: "grade4", category: ["story"], depth: "bridge",type:"core" },
//     { title: "晶晶的桃花源記", isbn: "9786267127674", group: "grade4", category: ["story"], depth: "bridge",type:"core" },
//     { title: "狐說八道4：投石問錯鹿", isbn: "9789864793419", group: "grade4", category: ["story"], depth: "bridge",type:"core" },
//     { title: "小紅，不一樣", isbn: "9789865257675", group: "grade4", category: ["story"], depth: "bridge",type:"core" },
//     // =======四/人/核=========
//     { title: "LOOK！各種角度看名畫（新版）", isbn: "9789864403592", group: "grade4", category: ["humanities"], depth: "bridge",type:"core" },
//     { title: "出發吧！環遊世界24個傳統市場", isbn: "9786263552289", group: "grade4", category: ["humanities"], depth: "bridge",type:"core" },
//     { title: "窗邊的小荳荳（40週年紀念版）", isbn: "9786263056244", group: "grade4", category: ["humanities"], depth: "bridge",type:"core" },
//     { title: "清秀佳人【紅髮安妮】", isbn: "9789861899992", group: "grade4", category: ["humanities"], depth: "beginner",type:"core" },

//     // =======六/跨/核=========
//     { title: "尋水之心", isbn: "9789866104794", group: "grade6", category: ["humanities","science"], depth: "beginner" ,type:"core"},
//     { title: "致命廚娘：不要叫我傷寒瑪麗", isbn: "9789573277583", group: "grade6", category: ["humanities","science"], depth: "intermediate" ,type:"core"},
//     { title: "甲蟲男孩", isbn: "9789869504799", group: "grade6", category: ["story","science"], depth: "intermediate"  ,type:"core"},
//     { title: "黑糖的女兒", isbn: "9786267281376", group: "grade6", category:  ["story","humanities"], depth: "beginner"  ,type:"core"},
//     // =======六/科/核=========
//     { title: "STEAM大挑戰：32個趣味任務，開發孩子的設計思考力＋問題解決力", isbn: "9789864775477", group: "grade6", category: ["science"], depth: "beginner" ,type:"core"},
//     { title: "人體大探險 2 人體奧祕大發現：受傷和生病之謎大解密", isbn: "9789576868177", group: "grade6", category: ["science"], depth: "bridge" ,type:"core"},
//     { title: "鳥類的機智都市生活：從覓食、求偶、築巢、叫聲，一窺 43 種鳥鄰居令人意想不到的日常", isbn: "9789573294467", group: "grade6", category: ["science"], depth: "beginner" ,type:"core"},
//     { title: "SDGs系列講堂 牽動全球的水資源與環境問題：建立永續循環的水文化，解決刻不容緩的缺水、淹水與汙染問題", isbn: "9786263292765", group: "grade6", category: ["science"], depth: "bridge" ,type:"core"},
//     // =======六/故/核=========
//     { title: "暗號偵探社", isbn: "9789869614252", group: "grade6", category: ["story"], depth: "intermediate",type:"core" },
//     { title: "少年廚俠1：兩王的心結", isbn: "9789579095464", group: "grade6", category: ["story"], depth: "beginner",type:"core" },
//     { title: "馬背上的少女", isbn: "9789864505944", group: "grade6", category: ["story"], depth: "beginner",type:"core" },
//     { title: "魔法灰姑娘", isbn: "9786267043219", group: "grade6", category: ["story"], depth: "intermediate",type:"core" },
//     // =======六/人/核=========
//     { title: "世界貧窮：我們窮不是因為懶惰", isbn: "9789570854183", group: "grade6", category: ["humanities"], depth: "beginner",type:"core" },
//     { title: "億載金城之暗夜迷蹤", isbn: "9789869483759", group: "grade6", category: ["humanities"], depth: "intermediate",type:"core" },
//     { title: "巨人皇后的祕密：通往自由的明日之地）", isbn: "9789863384090", group: "grade6", category: ["humanities"], depth: "beginner",type:"core" },
//     { title: "辛德勒名單：木箱上的男孩", isbn: "9789577517319", group: "grade6", category: ["humanities"], depth: "intermediate",type:"core" },

//     // =======國/跨/核=========
//     { title: "一把蓮：黑水溝傳奇", isbn: "9789574905027", group: "junior", category: ["story","humanities"], depth: "beginner" ,type:"core"},
//     { title: "山豬飛鼠撒可努", isbn: "9789869805049", group: "junior", category: ["story","humanities"], depth: "intermediate" ,type:"core"},
//     { title: "蛤蟆先生去看心理師", isbn: "9789576587399", group: "junior", category: ["science","story"], depth: "intermediate"  ,type:"core"},
//     { title: "少年小樹之歌", isbn: "9789865060022", group: "junior", category:  ["story","humanities"], depth: "beginner"  ,type:"core"},
//     // =======國/科/核=========
//     { title: "一定要知道的怪奇科學：恐懼是很重要的感覺", isbn: "9789860680355", group: "junior", category: ["science"], depth: "intermediate" ,type:"core"},
//     { title: "生物課好好玩2：野外探險生物課！28堂尋寶課╳7大學習主題╳8個國內外自然景點", isbn: "9789869458276", group: "junior", category: ["science"], depth: "intermediate" ,type:"core"},
//     { title: "逆轉騙數", isbn: "9789862894743", group: "junior", category: ["science"], depth: "intermediate" ,type:"core"},
//     { title: "瘟疫與人-傳染病對人類歷史的衝擊", isbn: "9789864790784", group: "junior", category: ["science"], depth: "intermediate" ,type:"core"},
//     // =======國/故/核=========
//     { title: "飛翔青空", isbn: "9789869148559", group: "junior", category: ["story"], depth: "intermediate",type:"core" },
//     { title: "危險心靈", isbn: "9789573332770", group: "junior", category: ["story"], depth: "advanced",type:"core" },
//     { title: "仙人掌女孩2：青春期又怎樣？", isbn: "9786263053151", group: "junior", category: ["story"], depth: "advanced",type:"core" },
//     { title: "詩魂（仙靈傳奇1）", isbn: "9789869319249", group: "junior", category: ["story"], depth: "advanced",type:"core" },
//     // =======國/人/核=========
//     { title: "給中小學生的世界歷史近現代卷:美國最會說故事的校長爺爺,帶你搭時光機,見證人類重要時刻（全彩插圖．三版）", isbn: "9789570854183", group: "junior", category: ["humanities"], depth: "intermediate",type:"core" },
//     { title: "開箱臺灣史：一本制霸中小學108課綱臺灣史學習內容！", isbn: "9789869483759", group: "junior", category: ["humanities"], depth: "advanced",type:"core" },
//     { title: "我的天才夢", isbn: "9789863384090", group: "junior", category: ["humanities"], depth: "intermediate",type:"core" },
//     { title: "林良爺爺的30封信(二版)：給青少年的解憂處方箋", isbn: "9789577517319", group: "junior", category: ["humanities"], depth: "advanced",type:"core" },

//     // =======高/跨/核=========
//     { title: "我們最幸福：北韓人民的真實生活", isbn: "9789574905027", group: "senior", category: ["story","humanities"], depth: "advanced" ,type:"core"},
//     { title: "勇闖宇宙首部曲：卡斯摩的祕密", isbn: "9789571348407", group: "senior", category: ["story","science"], depth: "intermediate" ,type:"core"},
//     // =======高/科/核=========
//     { title: "地球其實是昆蟲的：奇怪、美妙又不可或缺，主宰地球的小傢伙", isbn: "9789864893751", group: "senior", category: ["science"], depth: "advanced" ,type:"core"},
//     { title: "我們的島：臺灣三十年環境變遷全紀錄", isbn: "9789869533492", group: "senior", category: ["science"], depth: "advanced" ,type:"core"},
//     { title: "黑潮島航：一群海人的藍色曠野巡禮", isbn: "9789865406028", group: "senior", category: ["science"], depth: "advanced" ,type:"core"},
//     { title: "學習如何學習：給青少年的大腦特訓課，讓你學什麼都會、記憶力升級、告別拖拖拉拉，考試拿高分！", isbn: "9789863596585", group: "senior", category: ["science"], depth: "advanced" ,type:"core"},
//     // =======高/故/核=========
//     { title: "天龍八部（一）無量玉壁", isbn: "9789573261537", group: "senior", category: ["story"], depth: "advanced",type:"core" },
//     { title: "巧克力戰爭", isbn: "9789573263296", group: "senior", category: ["story"], depth: "advanced",type:"core" },
//     { title: "目擊者", isbn: " 9789869428842", group: "senior", category: ["story"], depth: "advanced",type:"core" },
//     { title: "不便利的便利店2", isbn: "9786269673360", group: "senior", category: ["story"], depth: "advanced",type:"core" },
//     // =======高/人/核=========
//     { title: "原子習慣：細微改變帶來巨大成就的實證法則", isbn: "9789861755267", group: "senior", category: ["humanities"], depth: "intermediate",type:"core" },
//     { title: "臺灣史上最有梗的臺灣史", isbn: "9789861372242", group: "senior", category: ["humanities"], depth: "intermediate",type:"core" },
//     { title: "老派少女購物路線", isbn: "9789573289982", group: "senior", category: ["humanities"], depth: "advanced",type:"core" },
//     { title: "被隱形的女性：從各式數據看女性受到的不公對待，消弭生活、職場、設計、醫療中的各種歧視", isbn: "9789864778539", group:  "senior", category: ["humanities"], depth: "advanced",type:"core" },

// ];

// 取得 HTML 元素
// const groupSelect = document.getElementById("groupSelect");
// const categorySelect = document.getElementById("categorySelect");
// const depthSelect = document.getElementById("depthSelect");
// const needSelect = document.getElementById("needSelect");
// const bookList = document.getElementById("bookList");

// // 更新書籍列表
// function updateBookList() {
//     const selectedGroup = groupSelect.value || "";  // 預設為空值，顯示全部
//     const selectedCategory = categorySelect.value || "";
//     const selectedDepth = depthSelect.value || "";
//     const selectedNeed = needSelect.value || "";

//     // 過濾符合條件的書籍
//     const filteredBooks = books.filter(book => 
//         (selectedGroup === "" || book.group === selectedGroup) &&
//         (selectedCategory === "" || book.category.includes(selectedCategory) || (selectedCategory === "cross" && book.category.length > 1)) &&
//         (selectedDepth === "" || book.depth === selectedDepth) &&
//         (selectedNeed === "" || book.type === selectedNeed)
//     );

//     // 清空書籍列表
//     bookList.innerHTML = "";

//     // **如果選擇 "選讀書籍"，顯示 "建構中..."**
//     // if (selectedNeed === "choose") {
//     //     bookList.innerHTML = '<tr><td colspan="6" class="text-center text-muted">建構中...</td></tr>';
//     //     return;
//     // }

//     if (filteredBooks.length > 0) {
//         filteredBooks.forEach(book => {
//             const row = document.createElement("tr");
//             row.innerHTML = `
//                 <td class="group">${
//                     book.group === "grade2" ? "國小二年級" : 
//                     book.group === "grade4" ? "國小四年級" : 
//                     book.group === "grade6" ? "國小六年級" : 
//                     book.group === "junior" ? "國中級" : 
//                     book.group === "senior" ? "高中級" : "未指定"
//                 }</td>
//                 <td class="book-title">${book.title}</td>
//                 <td class="isbn">${book.isbn}</td>
//                 <td class="category">${book.category.map(cat => 
//                     `<div>${cat === "science" ? "科學技術" : cat === "story" ? "故事小說" : "人文社會"}</div>`
//                 ).join('')}</td>
//                 <td class="depth">${book.depth === "picture" ? "繪本" : book.depth === "bridge" ? "橋梁書" : book.depth === "beginner" ? "初階文字書" : book.depth === "intermediate" ? "中階文字書" : "高階文字書"}</td>
//                 <td>${book.type === "core" ? "核心書籍" : "選讀書籍"}</td>
//             `;
//             bookList.appendChild(row);
//         });
//     } else {
//         bookList.innerHTML = '<tr><td colspan="6" class="text-muted">沒有符合條件的書籍</td></tr>';
//     }
// }
// // ✅ **在頁面載入時自動顯示所有書籍**
// document.addEventListener("DOMContentLoaded", function () {
//     updateBookList();
// });

// // 監聽下拉選單變更
// groupSelect.addEventListener("change", updateBookList);
// categorySelect.addEventListener("change", updateBookList);
// depthSelect.addEventListener("change", updateBookList);
// needSelect.addEventListener("change", updateBookList);

document.addEventListener("DOMContentLoaded", function () {
    const bookList = document.getElementById("bookList");
    const groupSelect = document.getElementById("groupSelect");
    const categorySelect = document.getElementById("categorySelect");
    const depthSelect = document.getElementById("depthSelect");
    const needSelect = document.getElementById("needSelect");

    let booksData = [];

    function readExcelFile() {
        const files = [
            "/booklist/第二屆_核心書單.xlsx",
            "/booklist/第二屆_選讀書單.xlsx"
        ];

        booksData = []; // 清空舊資料

        let filePromises = files.map(file =>
            fetch(file)
                .then(response => response.blob())
                .then(blob => new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        const data = new Uint8Array(e.target.result);
                        const workbook = XLSX.read(data, { type: "array" });

                        let allSheetData = [];

                        workbook.SheetNames.forEach(sheetName => {
                            const worksheet = workbook.Sheets[sheetName];
                            let sheetData = XLSX.utils.sheet_to_json(worksheet);

                            sheetData.forEach(book => {
                                book["年級"] = book["年級"] ? book["年級"].trim() : "";
                                book["領域"] = book["領域"] ? book["領域"].trim() : "";
                                book["深度"] = book["深度"] ? book["深度"].trim() : "";
                                book["類別"] = book["類別"] ? book["類別"].trim() : "";
                            });

                            allSheetData = allSheetData.concat(sheetData);
                        });

                        resolve(allSheetData);
                    };
                    reader.onerror = reject;
                    reader.readAsArrayBuffer(blob);
                }))
        );

        Promise.all(filePromises)
            .then(results => {
                booksData = results.flat();
                updateBookList();
            })
            .catch(error => console.error("讀取 Excel 錯誤:", error));
    }

    function updateBookList() {
        const selectedGroup = groupSelect.value.trim();
        const selectedCategory = categorySelect.value.trim();
        const selectedDepth = depthSelect.value.trim();
        const selectedNeed = needSelect.value.trim();

        const filteredBooks = booksData.filter(book => {
            let bookCategory = book["領域"] ? book["領域"].split(",") : [];

            return (
                (selectedGroup === "" || book["年級"] === selectedGroup) &&
                (selectedCategory === "" ||
                    (selectedCategory === "跨領域" && bookCategory.length > 1) ||
                    bookCategory.includes(selectedCategory)
                ) &&
                (selectedDepth === "" || book["深度"] === selectedDepth) &&
                (selectedNeed === "" || book["類別"] === selectedNeed)
            );
        });

        bookList.innerHTML = "";

        if (filteredBooks.length > 0) {
            filteredBooks.forEach(book => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td>${book["年級"] || ""}</td>
                    <td>${book["書名"] || ""}</td>
                    <td>${book["ISBN"] || ""}</td>
                    <td>${book["領域"] || ""}</td>
                    <td>${book["深度"] || ""}</td>
                    <td>${book["類別"] || ""}</td>
                `;
                bookList.appendChild(tr);
            });
        } else {
            bookList.innerHTML = `<tr><td colspan="7" class="text-muted">沒有符合條件的書籍</td></tr>`;
        }
    }

    groupSelect.addEventListener("change", updateBookList);
    categorySelect.addEventListener("change", updateBookList);
    depthSelect.addEventListener("change", updateBookList);
    needSelect.addEventListener("change", updateBookList);

    document.getElementById("certificationListBtn").addEventListener("click", function () {
        readExcelFile();
    });
});

// ==========================過程中規劃數量跳轉==============================
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("toReadingPlan").addEventListener("click", function (event) {
        event.preventDefault(); // 阻止預設超連結動作

        // 找到「廣量閱讀」的 tab 按鈕
        var readingTab = document.getElementById("pills-book-tab");

        if (readingTab) {
            readingTab.click(); // 觸發點擊事件，切換到「廣量閱讀」
        }
    });
});

// ==========================實施辦法中第三...過程階段跳轉==============================

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("toProcess").addEventListener("click", function (event) {
        event.preventDefault(); // 阻止預設超連結動作

        // 找到「廣量閱讀」的 tab 按鈕
        var processTab = document.getElementById("pills-process-tab");

        if (processTab) {
            processTab.click(); // 觸發點擊事件，切換到「廣量閱讀」
        }
    });
});

// ==========================實施辦法中第四-3...評量階段跳轉==============================

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("toEvaluate").addEventListener("click", function (event) {
        event.preventDefault(); // 阻止預設超連結動作

        // 找到「廣量閱讀」的 tab 按鈕
        var evaluateTab = document.getElementById("pills-evaluate-tab");

        if (evaluateTab) {
            evaluateTab.click(); // 觸發點擊事件，切換到「廣量閱讀」
        }
    });
});
// ==========================實施辦法中第四-3...評量階段跳轉==============================
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".clickable-img"); // 取得所有可點擊圖片
    const modalImage = document.getElementById("modalImage");

    images.forEach(img => {
        img.addEventListener("click", function () {
            modalImage.src = this.src; // 設定 Modal 內的圖片來源
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".clickable-img"); // 所有可點擊的圖片
    const modalImage = document.getElementById("modalImage");

    images.forEach(img => {
        img.addEventListener("click", function () {
            modalImage.src = this.src; // 設定 Modal 內的圖片來源
        });
    });
});


