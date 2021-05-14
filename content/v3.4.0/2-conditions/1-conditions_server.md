---
slug: "/post1"
title: "Требования к серверу"
sort: "1"
---

##### **Конфигурация компьютера**
Производительность **eVision** и количество камер, работающих одновременно с видеоаналитикой зависит от конфигурации компьютера. Чем выше количество ядер процессора и оперативной памяти, тем большее количество видеопотоков **eVision** может одновременно анализировать. Минимальные требования к компьютеру:

||Intel|AMD|
| :- | :- | :- |
|Процессор|не ниже i3|не ниже Ryzen 3|
|Оперативная память|не ниже 8 гигабайт|не ниже 8 гигабайт|
|Жесткий диск|не меньше 100 гигабайт|не меньше 100 гигабайт|

Пример конфигурации компьютера и производительность **eVision**:	

||Процессор Intel i3 8100 3,6 Ггц Оперативная память DDR3 4 Гб Жесткий диск HDD 100 Гб|Процессор Intel i5 8259 2,3 Ггц Оперативная память DDR4 8 Гб Жесткий диск HDD 1Тб |Процессор Intel i7 7600 3,9 Ггц Оперативная память DDR4 16 Гб Жесткий диск HDD 2Тб |
| :- | :- | :- | :- |
|Количество устройств для видеонаблюдения|4|6|10|
|Количество устройств для распознавания|2|4|6|

##### **Поддерживаемые операционные системы**
Доступные операционные системы:

|Тип ОС|Версия|Тип инсталлятора|Управление|
| :- | :- | :- | :-: |
||||Локально/Удаленно|
|MS Windows|10 версии 64 бит|.exe приложение|Собственный интерфейс|Браузеры (Edge, Chrome, Opera, Safari, Yandex)|
|Ubuntu|16.04, 18.04|docker контейнер|Браузеры (Chrome, Opera, Firefox)|Браузеры (Chrome, Opera, Firefox)|

##### **Интернет**
   Доступ в интернет **eVision** необходим для:

- активации лицензионных ключей видеоаналитики, 
- работы сервиса [eVision.Cloud](http://cloud.evision.tech/) и использования навыка **Умный домофон** в голосовом помощнике [Алиса](https://dialogs.yandex.ru/store/skills/95f2acff-umnyj-domofon),
- подключения облачных камер,
- обновления версии **eVision**

Для работы распознавания объектов (лиц, персон, автомобилей и автомобильных номеров) доступ в интернет не требуется.