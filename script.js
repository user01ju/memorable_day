// 儲存紀念日的陣列
let memorableDates = [];
// 儲存喜愛城市的陣列
let favoriteCities = [];

// DOM 元素
const dateNameInput = document.getElementById('date-name');
const dateValueInput = document.getElementById('date-value');
const addDateButton = document.getElementById('add-date');
const datesGrid = document.getElementById('dates-grid');
const citySelect = document.getElementById('city-select');
const getWeatherButton = document.getElementById('get-weather');
const weatherInfo = document.getElementById('weather-info');
const favoriteCitiesList = document.getElementById('favorite-cities-list');
const addFavoriteCityButton = document.getElementById('add-favorite-city');

// API 設定
const API_KEY = 'CWA-2D64D107-5968-4552-9EF7-AEEEF704B4AE';
const API_URL = 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-091';

// 城市代碼對照表
const cityCodes = {
    '基隆市': '基隆市',
    '台北市': '臺北市',
    '新北市': '新北市',
    '桃園市': '桃園市',
    '新竹市': '新竹市',
    '新竹縣': '新竹縣',
    '苗栗縣': '苗栗縣',
    '台中市': '臺中市',
    '彰化縣': '彰化縣',
    '南投縣': '南投縣',
    '雲林縣': '雲林縣',
    '嘉義市': '嘉義市',
    '嘉義縣': '嘉義縣',
    '台南市': '臺南市',
    '高雄市': '高雄市',
    '屏東縣': '屏東縣',
    '台東縣': '臺東縣',
    '花蓮縣': '花蓮縣',
    '宜蘭縣': '宜蘭縣',
    '澎湖縣': '澎湖縣',
    '金門縣': '金門縣',
    '連江縣': '連江縣'
};

// 天氣圖示對照表
const weatherIcons = {
    '01': '☀️', // 晴天
    '02': '🌤️', // 多雲時晴
    '03': '⛅', // 多雲
    '04': '☁️', // 陰天
    '05': '🌦️', // 多雲時陰短暫雨
    '06': '🌧️', // 陰時多雲短暫雨
    '07': '🌧️', // 多雲時陰短暫雨
    '08': '⛈️', // 陰時多雲短暫雷陣雨
    '09': '⛈️', // 多雲時陰短暫雷陣雨
    '10': '🌧️', // 陰時多雲有雨
    '11': '🌧️', // 多雲時陰有雨
    '12': '🌧️', // 陰有雨
    '13': '🌧️', // 多雲時陰有雨
    '14': '🌧️', // 陰有雨
    '15': '🌧️', // 多雲時陰有雨
    '16': '🌧️', // 陰有雨
    '17': '🌧️', // 多雲時陰有雨
    '18': '🌧️', // 陰有雨
    '19': '🌧️', // 多雲時陰有雨
    '20': '🌧️', // 陰有雨
    '21': '🌧️', // 多雲時陰有雨
    '22': '🌧️', // 陰有雨
    '23': '🌧️', // 多雲時陰有雨
    '24': '🌧️', // 陰有雨
    '25': '🌧️', // 多雲時陰有雨
    '26': '🌧️', // 陰有雨
    '27': '🌧️', // 多雲時陰有雨
    '28': '🌧️', // 陰有雨
    '29': '🌧️', // 多雲時陰有雨
    '30': '🌧️', // 陰有雨
    '31': '🌧️', // 多雲時陰有雨
    '32': '🌧️', // 陰有雨
    '33': '🌧️', // 多雲時陰有雨
    '34': '🌧️', // 陰有雨
    '35': '🌧️', // 多雲時陰有雨
    '36': '🌧️', // 陰有雨
    '37': '🌧️', // 多雲時陰有雨
    '38': '🌧️', // 陰有雨
    '39': '🌧️', // 多雲時陰有雨
    '40': '🌧️', // 陰有雨
    '41': '🌧️', // 多雲時陰有雨
    '42': '🌧️', // 陰有雨
    '43': '🌧️', // 多雲時陰有雨
    '44': '🌧️', // 陰有雨
    '45': '🌧️', // 多雲時陰有雨
    '46': '🌧️', // 陰有雨
    '47': '🌧️', // 多雲時陰有雨
    '48': '🌧️', // 陰有雨
    '49': '🌧️', // 多雲時陰有雨
    '50': '🌧️', // 陰有雨
    '51': '🌧️', // 多雲時陰有雨
    '52': '🌧️', // 陰有雨
    '53': '🌧️', // 多雲時陰有雨
    '54': '🌧️', // 陰有雨
    '55': '🌧️', // 多雲時陰有雨
    '56': '🌧️', // 陰有雨
    '57': '🌧️', // 多雲時陰有雨
    '58': '🌧️', // 陰有雨
    '59': '🌧️', // 多雲時陰有雨
    '60': '🌧️', // 陰有雨
    '61': '🌧️', // 多雲時陰有雨
    '62': '🌧️', // 陰有雨
    '63': '🌧️', // 多雲時陰有雨
    '64': '🌧️', // 陰有雨
    '65': '🌧️', // 多雲時陰有雨
    '66': '🌧️', // 陰有雨
    '67': '🌧️', // 多雲時陰有雨
    '68': '🌧️', // 陰有雨
    '69': '🌧️', // 多雲時陰有雨
    '70': '🌧️', // 陰有雨
    '71': '🌧️', // 多雲時陰有雨
    '72': '🌧️', // 陰有雨
    '73': '🌧️', // 多雲時陰有雨
    '74': '🌧️', // 陰有雨
    '75': '🌧️', // 多雲時陰有雨
    '76': '🌧️', // 陰有雨
    '77': '🌧️', // 多雲時陰有雨
    '78': '🌧️', // 陰有雨
    '79': '🌧️', // 多雲時陰有雨
    '80': '🌧️', // 陰有雨
    '81': '🌧️', // 多雲時陰有雨
    '82': '🌧️', // 陰有雨
    '83': '🌧️', // 多雲時陰有雨
    '84': '🌧️', // 陰有雨
    '85': '🌧️', // 多雲時陰有雨
    '86': '🌧️', // 陰有雨
    '87': '🌧️', // 多雲時陰有雨
    '88': '🌧️', // 陰有雨
    '89': '🌧️', // 多雲時陰有雨
    '90': '🌧️', // 陰有雨
    '91': '🌧️', // 多雲時陰有雨
    '92': '🌧️', // 陰有雨
    '93': '🌧️', // 多雲時陰有雨
    '94': '🌧️', // 陰有雨
    '95': '🌧️', // 多雲時陰有雨
    '96': '🌧️', // 陰有雨
    '97': '🌧️', // 多雲時陰有雨
    '98': '🌧️', // 陰有雨
    '99': '🌧️'  // 多雲時陰有雨
};

// 從本地儲存載入紀念日
function loadDates() {
    const savedDates = localStorage.getItem('memorableDates');
    if (savedDates) {
        memorableDates = JSON.parse(savedDates);
        renderDates();
    }
}

// 儲存紀念日到本地儲存
function saveDates() {
    localStorage.setItem('memorableDates', JSON.stringify(memorableDates));
}

// 從本地儲存載入喜愛城市
function loadFavoriteCities() {
    const savedCities = localStorage.getItem('favoriteCities');
    if (savedCities) {
        favoriteCities = JSON.parse(savedCities);
        renderFavoriteCities();
    }
}

// 儲存喜愛城市到本地儲存
function saveFavoriteCities() {
    localStorage.setItem('favoriteCities', JSON.stringify(favoriteCities));
}

// 計算天數差
function calculateDaysDiff(date) {
    const today = new Date();
    const targetDate = new Date(date);
    const diffTime = Math.abs(today - targetDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

// 渲染紀念日卡片
function renderDates() {
    datesGrid.innerHTML = '';
    memorableDates.forEach(date => {
        const daysDiff = calculateDaysDiff(date.value);
        const card = document.createElement('div');
        card.className = 'date-card';
        card.innerHTML = `
            <h3>${date.name}</h3>
            <p>日期：${date.value}</p>
            <p>已過天數：${daysDiff} 天</p>
            <button class="delete-btn" data-id="${date.id}">刪除</button>
        `;
        datesGrid.appendChild(card);
    });

    // 為刪除按鈕添加事件監聽器
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.target.dataset.id;
            deleteDate(id);
        });
    });
}

// 新增紀念日
function addDate() {
    const name = dateNameInput.value.trim();
    const value = dateValueInput.value;

    if (!name || !value) {
        alert('請填寫完整的紀念日資訊！');
        return;
    }

    const newDate = {
        id: Date.now().toString(),
        name,
        value
    };

    memorableDates.push(newDate);
    saveDates();
    renderDates();

    // 清空輸入框
    dateNameInput.value = '';
    dateValueInput.value = '';
}

// 刪除紀念日
function deleteDate(id) {
    memorableDates = memorableDates.filter(date => date.id !== id);
    saveDates();
    renderDates();
}

// 取得天氣資料
async function getWeather() {
    const city = citySelect.value;
    if (!city) {
        alert('請選擇城市！');
        return;
    }

    // 確保使用正確的城市名稱格式
    const formattedCity = cityCodes[city] || city;
    console.log('查詢城市:', formattedCity);
    console.log('URL 編碼:', encodeURIComponent(formattedCity));

    try {
        const response = await fetch(`${API_URL}?Authorization=${API_KEY}&LocationName=${encodeURIComponent(formattedCity)}`, {
            method: 'GET',
            headers: {
                'accept': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error(`API 請求失敗: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('API 回應:', data); // 用於除錯
        
        if (data.success === 'true' && data.records && data.records.Locations) {
            const locations = data.records.Locations;
            if (locations.length === 0 || !locations[0].Location || locations[0].Location.length === 0) {
                weatherInfo.innerHTML = `<p>找不到 ${formattedCity} 的天氣資料</p>`;
                return;
            }

            const locationData = locations[0].Location[0];
            if (!locationData.WeatherElement) {
                weatherInfo.innerHTML = '<p>無法取得天氣元素資料</p>';
                return;
            }

            const weatherElements = locationData.WeatherElement;
            
            // 取得天氣現象
            const weatherElement = weatherElements.find(e => e.ElementName === '天氣現象');
            if (!weatherElement || !weatherElement.Time || weatherElement.Time.length === 0) {
                weatherInfo.innerHTML = '<p>無法取得天氣現象資料</p>';
                return;
            }
            const weatherData = weatherElement.Time[0].ElementValue[0];
            
            // 取得溫度
            const maxTempElement = weatherElements.find(e => e.ElementName === '最高溫度');
            const minTempElement = weatherElements.find(e => e.ElementName === '最低溫度');
            if (!maxTempElement || !minTempElement) {
                weatherInfo.innerHTML = '<p>無法取得溫度資料</p>';
                return;
            }
            const maxTemp = maxTempElement.Time[0].ElementValue[0].MaxTemperature;
            const minTemp = minTempElement.Time[0].ElementValue[0].MinTemperature;
            
            // 取得降雨機率
            const popElement = weatherElements.find(e => e.ElementName === '12小時降雨機率');
            if (!popElement) {
                weatherInfo.innerHTML = '<p>無法取得降雨機率資料</p>';
                return;
            }
            const pop = popElement.Time[0].ElementValue[0].ProbabilityOfPrecipitation;
            
            // 取得舒適度
            const comfortElement = weatherElements.find(e => e.ElementName === '最大舒適度指數');
            if (!comfortElement) {
                weatherInfo.innerHTML = '<p>無法取得舒適度資料</p>';
                return;
            }
            const comfort = comfortElement.Time[0].ElementValue[0].MaxComfortIndexDescription;
            
            // 取得風向和風速
            const windDirElement = weatherElements.find(e => e.ElementName === '風向');
            const windSpeedElement = weatherElements.find(e => e.ElementName === '風速');
            if (!windDirElement || !windSpeedElement) {
                weatherInfo.innerHTML = '<p>無法取得風向風速資料</p>';
                return;
            }
            const windDir = windDirElement.Time[0].ElementValue[0].WindDirection;
            const windSpeed = windSpeedElement.Time[0].ElementValue[0].WindSpeed;
            
            // 取得相對濕度
            const humidityElement = weatherElements.find(e => e.ElementName === '平均相對濕度');
            if (!humidityElement) {
                weatherInfo.innerHTML = '<p>無法取得濕度資料</p>';
                return;
            }
            const humidity = humidityElement.Time[0].ElementValue[0].RelativeHumidity;
            
            const weatherInfoData = {
                city: locationData.LocationName,
                weather: weatherData.Weather,
                weatherCode: weatherData.WeatherCode,
                maxTemp: maxTemp,
                minTemp: minTemp,
                pop: pop,
                comfort: comfort,
                windDir: windDir,
                windSpeed: windSpeed,
                humidity: humidity
            };
            
            renderWeather(weatherInfoData);
        } else {
            weatherInfo.innerHTML = '<p>無法取得該城市的天氣資料</p>';
        }
    } catch (error) {
        console.error('取得天氣資料時發生錯誤：', error);
        weatherInfo.innerHTML = `<p>取得天氣資料時發生錯誤：${error.message}</p>`;
    }
}

// 渲染天氣資訊
function renderWeather(data) {
    const weatherIcon = weatherIcons[data.weatherCode] || '❓';
    weatherInfo.innerHTML = `
        <div class="weather-card">
            <div class="weather-item">
                <h3>城市</h3>
                <p>${data.city}</p>
            </div>
            <div class="weather-item">
                <h3>天氣狀況</h3>
                <p class="weather-icon">${weatherIcon} ${data.weather}</p>
            </div>
            <div class="weather-item">
                <h3>溫度</h3>
                <p>${data.minTemp}°C ~ ${data.maxTemp}°C</p>
            </div>
            <div class="weather-item">
                <h3>降雨機率</h3>
                <p>${data.pop}%</p>
            </div>
            <div class="weather-item">
                <h3>舒適度</h3>
                <p>${data.comfort}</p>
            </div>
            <div class="weather-item">
                <h3>風向/風速</h3>
                <p>${data.windDir} ${data.windSpeed}級</p>
            </div>
            <div class="weather-item">
                <h3>相對濕度</h3>
                <p>${data.humidity}%</p>
            </div>
        </div>
    `;
}

// 新增喜愛城市
function addFavoriteCity() {
    const city = citySelect.value;
    if (!city) {
        alert('請先選擇一個城市！');
        return;
    }

    if (!favoriteCities.includes(city)) {
        favoriteCities.push(city);
        saveFavoriteCities();
        renderFavoriteCities();
    }
}

// 刪除喜愛城市
function deleteFavoriteCity(city) {
    favoriteCities = favoriteCities.filter(c => c !== city);
    saveFavoriteCities();
    renderFavoriteCities();
}

// 渲染喜愛城市列表
function renderFavoriteCities() {
    favoriteCitiesList.innerHTML = '';
    favoriteCities.forEach(city => {
        const cityItem = document.createElement('div');
        cityItem.className = 'favorite-city-item';
        cityItem.innerHTML = `
            <span>${city}</span>
            <button class="delete-favorite-city" data-city="${city}">刪除</button>
        `;
        favoriteCitiesList.appendChild(cityItem);

        // 添加點擊事件監聽器
        cityItem.addEventListener('click', (e) => {
            // 如果點擊的是刪除按鈕，不觸發天氣查詢
            if (e.target.classList.contains('delete-favorite-city')) {
                return;
            }
            // 設置選擇的城市並查詢天氣
            citySelect.value = city;
            getWeather();
        });
    });

    // 為刪除按鈕添加事件監聽器
    document.querySelectorAll('.delete-favorite-city').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const city = e.target.dataset.city;
            deleteFavoriteCity(city);
        });
    });
}

// 事件監聽器
addDateButton.addEventListener('click', addDate);
getWeatherButton.addEventListener('click', getWeather);
addFavoriteCityButton.addEventListener('click', addFavoriteCity);

// 頁面載入時載入資料
document.addEventListener('DOMContentLoaded', () => {
    loadDates();
    loadFavoriteCities();
    
    // 如果有喜愛城市，自動查詢第一個城市的天氣
    if (favoriteCities.length > 0) {
        citySelect.value = favoriteCities[0];
        getWeather();
    }
}); 