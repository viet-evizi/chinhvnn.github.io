function seeMoreClicked(docId) {
  const doc = document.querySelector(`#${docId} .exp__content`);
  const btn = document.querySelector(`#${docId} .see-more span`);

  if (!doc.classList.contains('has-see-more')) {
    btn.textContent = 'See less'
    doc.classList.add('has-see-more')
  } else {
    btn.textContent = 'See more'
    doc.classList.remove('has-see-more')
  }
}