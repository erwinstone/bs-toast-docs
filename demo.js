document.getElementById('test1').addEventListener('click', () => {
  new BsToast({
    body: 'This is a toast message. Toasts are lightweight notifications designed to mimic the push notifications that have been popularized by mobile and desktop operating systems.',
  }).show()
})
document.getElementById('test2').addEventListener('click', () => {
  new BsToast({
		header: `<h6 class="mb-0">Hello, world!</h6><small class="ms-auto">just now</small>`,
		body: 'This is a toast message. Toasts are lightweight notifications designed to mimic the push notifications that have been popularized by mobile and desktop operating systems.',
	}).show()
})
document.getElementById('test3').addEventListener('click', () => {
  new BsToast({
    body: 'This is a toast message. Toasts are lightweight notifications designed to mimic the push notifications that have been popularized by mobile and desktop operating systems.',
    placement: 'top-right',
  }).show()
})
document.getElementById('test4').addEventListener('click', () => {
  new BsToast({
    body: 'This is a toast message. Toasts are lightweight notifications designed to mimic the push notifications that have been popularized by mobile and desktop operating systems.',
    placement: 'top-left',
  }).show()
})
document.getElementById('test5').addEventListener('click', () => {
  new BsToast({
    body: 'This is a toast message. Toasts are lightweight notifications designed to mimic the push notifications that have been popularized by mobile and desktop operating systems.',
    placement: 'bottom-right',
  }).show()
})
document.getElementById('test6').addEventListener('click', () => {
  new BsToast({
    body: 'This is a toast message. Toasts are lightweight notifications designed to mimic the push notifications that have been popularized by mobile and desktop operating systems.',
    placement: 'bottom-left',
  }).show()
})
document.getElementById('test7').addEventListener('click', () => {
  new BsToast({
    body: 'Hello, world! This is a toast message.',
    className: 'border-0 bg-primary text-white',
	  btnCloseWhite: true,
  }).show()
})
document.getElementById('test8').addEventListener('click', () => {
  new BsToast({
    body: 'Hello, world! This is a toast message.',
    className: 'border-0 bg-secondary text-white',
	  btnCloseWhite: true,
  }).show()
})
document.getElementById('test9').addEventListener('click', () => {
  new BsToast({
    body: 'Hello, world! This is a toast message.',
    className: 'border-0 bg-success text-white',
	  btnCloseWhite: true,
  }).show()
})
document.getElementById('test10').addEventListener('click', () => {
  new BsToast({
    body: 'Hello, world! This is a toast message.',
    className: 'border-0 bg-danger text-white',
	  btnCloseWhite: true,
  }).show()
})
document.getElementById('test11').addEventListener('click', () => {
  new BsToast({
    body: 'Hello, world! This is a toast message.',
    className: 'border-0 bg-warning',
  }).show()
})
document.getElementById('test12').addEventListener('click', () => {
  new BsToast({
    body: 'Hello, world! This is a toast message.',
    className: 'border-0 bg-info',
  }).show()
})
document.getElementById('test13').addEventListener('click', () => {
  new BsToast({
    body: 'Hello, world! This is a toast message.',
    className: 'border-0 bg-dark text-white',
	  btnCloseWhite: true,
  }).show()
})
document.getElementById('test14').addEventListener('click', () => {
  new BsToast({
    body: 'Hello, world! This is a toast message.',
    className: 'border-0 bg-light',
  }).show()
})
document.getElementById('test15').addEventListener('click', () => {
  new BsToast({
    header: `
      <svg width="24" height="24" class="text-success me-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
      <h6 class="mb-0">Success!</h6>
      <small class="ms-auto">2 minutes ago</small>
      `,
    body: 'Your files have been successfully uploaded.',
  }).show()
})
document.getElementById('test16').addEventListener('click', () => {
  new BsToast({
    body: `
    <div class="d-flex gap-3">
      <img class="rounded-circle" width="75" height="75" src="https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=75&q=80">
      <div>
        <h4>Did you know ?</h4>
        <p class="text-secondary">
          Cats can run around 48 kph (30 mph), but only over short distances. A house cat could beat superstar runner Usain Bolt in the 200 meter dash.
        </p>
      </div>
    </div>
    `,
    autohide: false,
  }).show()
})

let confirmationToast
document.getElementById('test17').addEventListener('click', () => {
  confirmationToast = new BsToast({
    body: `
		<div class="d-flex gap-3">
			<svg class="text-danger flex-shrink-0" width="48" height="48" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
			</svg>
			<div>
				<h5>Deactivate account ?</h5>
				<p class="text-secondary">
					Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.
				</p>
				<button type="button" class="btn btn-light" data-bs-dismiss="toast">Cancel</button>
				<button type="button" class="btn btn-danger" onclick="deactivateAccount()">Deactivate</button>
			</div>
		</div>
		`,
		autohide: false,
		btnClose: false,
  })
  confirmationToast.show()
})
function deactivateAccount() {
	confirmationToast.hide()
	new BsToast({
		body: `
			<div class="d-flex align-items-center gap-3">
				<svg width="24" height="24" class="text-success" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
				</svg>
				Account deactivated.
			</div>
		`,
		className: 'bg-white border-success',
		duration: 1500,
	}).show()
}