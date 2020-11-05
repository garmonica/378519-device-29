let servicesButton = document.querySelectorAll('.services-button');

const contactsButton = document.querySelector('.contacts-button');
const feedbackPopup = document.querySelector('.modal-feedback');

const feedbackClose = document.querySelector('.modal-feedback .modal-close');
const feedbackForm = document.querySelector('.modal-feedback .modal-feedback-form');
const feedbackName = document.querySelector('.modal-feedback .modal-feedback-name');
const feedbackEmail = document.querySelector('.modal-feedback .modal-feedback-email');
const feedbackText = document.querySelector('.modal-feedback .modal-feedback-textarea');

const mapLink = document.querySelector('.contacts-map-link');
const mapPopup = document.querySelector('.modal-map');

const mapClose = document.querySelector('.modal-map .modal-close');

let isStorageSupport = true;
let storageName = '';
let storageEmail = '';

let sortingGroupsLinks = document.querySelectorAll('.sorting-groups-link');
let sortingGroupsMarkers = document.querySelectorAll('.sorting-marker');

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

if (servicesButton) {
  servicesButton.forEach(function(elem, i) {
    elem.addEventListener('click', function(evt) {
      evt.preventDefault();
      let sliderScreenName = this.dataset.slider;
      let sliderScreen = document.querySelector('.' + sliderScreenName);
      document.querySelector('.services-item-current').classList.remove('services-item-current');
      sliderScreen.classList.add('services-item-current');
      document.querySelector('.services-button-active').classList.remove('services-button-active');
      this.classList.add('services-button-active');
    });
  });
}

if (contactsButton) {
  contactsButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.add('modal-show');
    if (storageName && storageEmail) {
      feedbackName.value = storageName;
      feedbackEmail.value = storageEmail;
      feedbackText.focus();
    } else if (storageName) {
      feedbackName.value = storageName;
      feedbackEmail.focus();
    } else {
      feedbackName.focus();
    }
  });
}

if (feedbackPopup) {
  feedbackClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove('modal-show');
    feedbackPopup.classList.remove('modal-error');
  });
}

if (feedbackPopup) {
  feedbackForm.addEventListener('submit', function (evt) {
    if (!feedbackName.value || !feedbackEmail.value || !feedbackText.value) {
      evt.preventDefault();
      feedbackPopup.classList.remove('modal-error');
      feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
      feedbackPopup.classList.add('modal-error');
    } else {
      if (isStorageSupport) {
        localStorage.setItem('name', feedbackName.value);
        localStorage.setItem('email', feedbackEmail.value);
      }
    }
  });
}

if (mapPopup) {
  mapLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapPopup.classList.add('modal-show');
  });

  mapClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove('modal-show');
  });
}

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains('modal-show')) {
      evt.preventDefault();
      feedbackPopup.classList.remove('modal-show');
      feedbackPopup.classList.remove('modal-error');
    }
    if (mapPopup.classList.contains('modal-show')) {
      evt.preventDefault();
      mapPopup.classList.remove('modal-show');
    }
  }
});

if (sortingGroupsLinks) {
  sortingGroupsLinks.forEach(function (sortingLink) {
    sortingLink.addEventListener('click', function (evt) {
      evt.preventDefault();
      let sortingLinkCurrent = document.querySelector('.sorting-groups-link-current');
      sortingLinkCurrent.classList.remove('sorting-groups-link-current');
      sortingLink.classList.add('sorting-groups-link-current');
    });
  });
}

if (sortingGroupsMarkers) {
  sortingGroupsMarkers.forEach(function (sortingMarker) {
    sortingMarker.addEventListener('click', function (evt) {
      evt.preventDefault();
      let sortingMarkerCurrent = document.querySelector('.sorting-marker-current');
      sortingMarkerCurrent.classList.remove('sorting-marker-current');
      sortingMarker.classList.add('sorting-marker-current');
    });
  });
}
