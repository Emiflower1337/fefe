document.addEventListener('DOMContentLoaded', function() {
    const BIRTHDATE = '2005-07-21T00:00:00+02:00';
    const AGE_SELECTOR = '#about .window-body .tree-view li span';

    function calculateAge(birthdate) {
        const now = new Date();
        const birthDate = new Date(birthdate);
        let age = now.getFullYear() - birthDate.getFullYear();
        const monthDiff = now.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    function updateAge() {
        const ageElement = document.querySelector(AGE_SELECTOR);
        if (ageElement) {
            const age = calculateAge(BIRTHDATE);
            ageElement.textContent = age;
        } else {
            console.error('Age element not found in the DOM.');
        }
    }

    updateAge();
});