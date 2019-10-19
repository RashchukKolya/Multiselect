let $multiselectWrapper = document.querySelector('.Telefeed-popupAddChannel_multiselect_wrapper');
let $multiselect = document.querySelector('.Telefeed-popupAddChannel_multiselect');
let $multiselectPopup = document.querySelector('.Telefeed-popupAddChannel_multiselectPopup');
let arrСategories = ['Украина', 'Блог', 'Политика', 'Мнение', 'Экономика', 'Жизнь', 'Европа', 'Новости', 'Спорт'];
let arrСategoriesSelected = [];

$multiselect.addEventListener('click', (e) => {
	$multiselectPopup.classList.toggle('--active');
	$multiselectWrapper.classList.toggle('--active');
	e.stopPropagation();
});

arrСategories.map(elem => {
	let $item = document.createElement('p');
	$item.classList.add('Telefeed-popupAddChannel_multiselectPopup_item');
	$item.innerHTML = elem;
	$item.addEventListener('click', choose);
	$multiselectPopup.append($item);
});

function choose(e) {
	if (!e.target.classList.contains('--checked')) {
		e.target.classList.add('--checked');
		arrСategoriesSelected.push(e.target.innerText);
		CheckedItem();
	}
}

function CheckedItem() {
	while ($multiselect.firstChild) {
		$multiselect.removeChild($multiselect.firstChild);
	}

	arrСategoriesSelected.map(elem => {
		let $checkedItem = document.createElement('button');
		$checkedItem.classList.add('Telefeed-popupAddChannel_multiselect_checkedBtn');
		$checkedItem.addEventListener('click', removeBtn);
		$checkedItem.innerText = elem;
		$multiselect.append($checkedItem);
	})
}

function removeBtn(e) {
	let $checkedItems = document.querySelectorAll('.--checked');
	let removeChecked = [...$checkedItems].find(el => el.innerText === e.target.innerHTML);
	arrСategoriesSelected = arrСategoriesSelected.filter(val => val !== e.target.innerHTML);
	removeChecked.classList.remove('--checked');
	e.stopPropagation();
	CheckedItem();

	if (!$multiselect.firstChild) {
		let $placeHolder = document.createElement('p');
		$placeHolder.classList.add('Telefeed-popupAddChannel_multiselect_placeholder');
		$placeHolder.innerText = 'Выберите категорию';
		$multiselect.append($placeHolder);
	}
}