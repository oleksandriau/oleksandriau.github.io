function surprise () {
    let Kvitsi = "Привіт, Олександро! Цей веб-застосунок покликаний допомогти тобі замінитий блядський ноушн на людські нотатки (які не працюють на московії). Однак він ще дуже довго перебеватиме в процесі розробки, а поки ж він може виконати функцію твого підбадьорення. Я знаю, як тобі тяжко знаходитись там, де на тебе кричать, принижують та не дають спокою, однак я надіюсь, що тебе гріитиме думка про тортик, який ми з тобою зробимо, а також пригоди в снігу. Пам'ятай, що ти їдеш туди заради Соломії, і я певен, що вона дуже цінує це! Ти прекрасна сестра. 🫂❤️"

    let workspace = document.querySelector('.workspace')
    let navigation = document.querySelector('.main__navigation');
    navigation.style.display = 'none';

    let newDiv = document.createElement('div')
    newDiv.style.border = '1px solid';
    newDiv.style.padding = '8px';
    newDiv.style.width = '1000px';
    newDiv.style.borderRadius = '10px';
    newDiv.textContent = Kvitsi;

    workspace.appendChild(newDiv);
}