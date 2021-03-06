---
slug: "/post11"
title: "Как синхронизировать камеру Beward B2230L-P и eVision"
sort: "11"
---

#### Как добавить камеру Beward B2230L-P 

Для того, чтобы добавить камеру со встроенным распознаванием автомобильных номеров, нажмите кнопку **Добавить устройство** ![](images/image8.png) на **Панели устройств**. Откроется окно **Добавить устройство**, с выпадающим списком **Устройство**

![](images/Screenshot_157.png)  

- Выберите пункт **Beward (B2230L-P)**,
- В поле **Имя устройства** введите наименование устройства,
- В поле **IP-адрес устройства** введите корректный IP адрес видеоустройства,
- В поле **Логин доступа** введите логин для доступа на устройство,
- В поле **Пароль доступа** введите пароль для доступа на устройство,
- В поле **Режим видеоаналитики (необходима лицензия)** выберите **Автомобильный номер**,
- Нажмите кнопку **Добавить**, откроется окно, в котором транслируется видео с данного устройства.

- Перейдите в настройки устройства Beward B2230L-P в **eVision**
- Найдите блок **Лицензия**, введите новый лицензионный ключ и активируйте его либо введите уже имеющиеся лицензионный и активационный ключи
  
 ![](images/Screenshot_190.png)   

**Важно:** Для синхронизации камеры Beward B2230L-P необходима лицензия Plus или Pro. Приобрести лицензионный ключ можно в нашем интернет магазине: https://cryptostore.ru/catalog/faceid/

- Если лицензия уже введена и активирована, перейдите в настройки устройства Beward B2230L-P в **eVision**,  
- Найдите блок **Лицензия**, переключатель **Активация** переведите в активное состояние

![](images/Screenshot_205.png)  

- Сохраните настройки устройства

- Перейдите в настройки устройства Beward B2230L-P в **eVision**, найдите блок **Видеоаналитика**, переключатель **Распознавание автомобильных номеров** переведите в активное состояние

![](images/Screenshot_206.png)  

- Сохраните настройки устройства

- Перейдите на вкладку **Номера**, добавьте автомобильные номера транспортных средств, которым необходимо обеспечить пропуск на территорию.

![](images/Screenshot_202.png)  

**Важно:** При добавлении номера обязательно указывайте камеру Beward B2230L-P в поле "Доступ разрешен для". В таком случае номер автомобиля будет автоматически добавлен в список номеров с разрешенным доступом на самой камере.

![](images/Screenshot_197.png)  

Проверить список номеров, которым разрешен доступ можно в интерфейсе камеры, на вкладке **База номеров**

![](images/Screenshot_203.png)  

Камера готова к работе. 

**Важно:** Далее будет необходимо подключить управляющее реле камеры к исполнительному устройству турникета, шлагбаума или другому запирающему устройству. Распознанные номера с камеры каждые две минуты автоматически загружаются в историю **eVision**. Данные события можно просмотреть на вкладке **История**.

![](images/Screenshot_171.png)

#### Как синхронизировать если ВА не включили сразу:

Если вначале были созданы номера в **eVision**, а камера добавлена позже, то необходимо синхронизировать камеру **Beward B2230L-P** и **eVision**, для этого:

- Перейдите на вкладку **Номера**, проверить, что номера добавлены в **eVision** 

- Если лицензия уже введена в настройках устройства и активна, перейдите в настройки камеры Beward B2230L-P в **eVision**, найдите блок **Видеоаналитика**, переключатель **Распознавание автомобильных номеров** переведите в активное состояние.

![](images/Screenshot_206.png)  

- Сохраните настройки устройства

- Если лицензия не введена, то воспользуйтесь пунктом **Как активировать лицензию** в данном руководстве.

- После активации лицензии, перейдите в раздел **Номера**, нажмите кнопку **Синхронизировать с Beward B2230L-P** 

![](images/Screenshot_165.png)  

После успешной синхронизации база номеров в eVision и на камере синхронизируются

![](images/Screenshot_166.png)  

При этом на самой камере Beward B2230L-P активируется встроенное распознавание номеров и добавятся номера, созданные в eVision.  

![](images/Screenshot_168.png)    

![](images/Screenshot_170.png)   

Для того, чтобы отключить синхронизацию eVision c камерой Beward B2230L-P:

- Нажмите на переключатель **Распознавание автомобильных номеров**, переведите его в неактивное состояние

![](images/Screenshot_173.png)

- Сохраните настройки устройства

- Перейдите в интерфейс камеры, на вкладку **База номеров**, на вкладку **Настройки**, снимите галочку **Включить распознавание номеров**

- Нажмите кнопку **Сохранить**

Синхронизация камеры Beward B2230L-P и eVision будет отключена.