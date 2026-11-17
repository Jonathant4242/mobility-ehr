const packet = document.querySelector('#patient-intake-form');
const printButton = document.querySelector('#print-packet');

// Use text nodes so patient-entered values cannot become HTML in the printout.
function preparePrintValues() {
  packet
    .querySelectorAll('.print-value, .packet-print-header')
    .forEach((element) => {
      element.remove();
    });

  packet.querySelectorAll('.intake-section').forEach((section, index) => {
    const header = document.createElement('div');
    header.className = 'packet-print-header';
    const logo = document.createElement('img');
    logo.src = '/images/mobility-packet-logo.png';
    logo.alt = 'Mobility Physical Therapy';
    const pageLabel = document.createElement('p');
    pageLabel.textContent = `Educational prototype · Section ${index + 1} of 4`;
    header.append(logo, pageLabel);
    section.prepend(header);
  });

  packet.querySelectorAll('input, select, textarea').forEach((field) => {
    const value = document.createElement('span');
    value.className = 'print-value';
    if (field.type === 'checkbox') {
      value.classList.add('print-checkbox');
      value.textContent = field.checked ? '[X]' : '[ ]';
    } else if (field.tagName === 'SELECT') {
      value.textContent = field.value
        ? field.selectedOptions[0].textContent
        : '';
    } else {
      value.textContent = field.value;
    }
    field.after(value);
  });
}

// Also refresh values when printing from the browser menu or keyboard shortcut.
window.addEventListener('beforeprint', preparePrintValues);
printButton.addEventListener('click', async () => {
  preparePrintValues();
  await Promise.all(
    [...packet.querySelectorAll('.packet-print-header img')].map((logo) =>
      logo.decode().catch(() => {}),
    ),
  );
  window.print();
});
preparePrintValues();
printButton.disabled = false;
