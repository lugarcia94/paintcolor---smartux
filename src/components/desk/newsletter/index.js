import $ from 'jquery';
var _emailIcon = $(`
<div class="send_icon">
<svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.9532 0.843528C18.7992 0.643468 18.586 0.491715 18.3409 0.407686C18.0958 0.323656 17.83 0.31117 17.5774 0.371821L0.990155 4.34922C0.739094 4.40941 0.512391 4.5391 0.338674 4.72192C0.164956 4.90474 0.0520157 5.13247 0.0141143 5.37638C-0.023787 5.62029 0.0150507 5.86943 0.125723 6.09233C0.236395 6.31523 0.413938 6.5019 0.635932 6.62876L4.14406 8.6337V13.0311C4.14393 13.1128 4.1679 13.1928 4.21324 13.2621C4.25858 13.3314 4.32346 13.3872 4.40048 13.423C4.4775 13.4589 4.56355 13.4734 4.64882 13.465C4.73409 13.4565 4.81515 13.4254 4.88273 13.3751L8.17305 10.9391L10.8735 12.4812C11.1692 12.6504 11.523 12.7017 11.8581 12.6239C12.1932 12.5461 12.4826 12.3454 12.6632 12.0656L19.0121 2.23503C19.1487 2.02379 19.216 1.77858 19.2055 1.53072C19.195 1.28286 19.1072 1.04361 18.9532 0.843528ZM11.4688 11.0993L7.35454 8.74886L11.5277 5.32437C11.5453 5.31434 11.5607 5.3011 11.5729 5.28542C11.5851 5.26973 11.594 5.2519 11.599 5.23294C11.604 5.21399 11.6051 5.19428 11.6021 5.17495C11.5991 5.15562 11.5921 5.13703 11.5816 5.12026C11.571 5.10349 11.5571 5.08886 11.5407 5.07721C11.5242 5.06555 11.5055 5.0571 11.4856 5.05234C11.4657 5.04757 11.445 5.04659 11.4247 5.04944C11.4044 5.05229 11.3849 5.05892 11.3673 5.06896L5.0114 7.40903L1.92338 5.64548L17.3859 1.93827L11.4688 11.0993Z" fill="#012E57"/>
</svg>
</div>
`)
$(document).ready(function () {
    $('.news_email').append(_emailIcon)
})