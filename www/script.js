window.onload = () => {
    function aWrapper(el, path) {
        var a = document.createElement('a');
        a.setAttribute('type', 'button');
        a.setAttribute('data-bs-toggle', 'modal');
        a.setAttribute('data-bs-target', '#exampleModal');
        a.setAttribute('data-bs-image', path);
        return a;
    }

    function wrappByClass(className) {
        var el, elements = document.getElementsByClassName(className);

        for (var i = elements.length; i--;) {
            el = elements[i];
            const wrapper = aWrapper(el, el.getAttribute('src'));
            el.parentNode.replaceChild(wrapper, el);
            wrapper.appendChild(el);
        }
    }
    wrappByClass('img-thumbnail');

    var exampleModal = document.getElementById('exampleModal');
    exampleModal.addEventListener('show.bs.modal', function (event) {
        var button = event.relatedTarget
        var imagePath = button.getAttribute('data-bs-image')
        var modalImage = exampleModal.querySelector('.modal-image');
        modalImage.src = imagePath;
    });

    const navLink = document.getElementsByClassName('active')[0];
    navLink.classList.add('nav-link');
    navLink.classList.remove('link-dark');
    navLink.parentElement.classList.add('nav-item');
};