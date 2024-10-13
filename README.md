
# GIỚI THIỆU CHỨC NĂNG

Dự án lấy dữ liệu từ API bên thứ 3 (https://www.themoviedb.org/)

Khi cuộn xuống 100px của Navbar sẽ chuyển nền từ trong suốt (transparent) sang màu đen 

### /Trang chủ

Banner là 1 phim ngẫu nhiên lấy từ danh sách phim đầu tiên

Mỗi một danh mục là danh sách phim có thể kéo ngang (overflow auto) để xem tiếp, 

Khi click chọn vào 1 phim bất kỳ sẽ hiển thị phần giới thiệu nội dung và trailer phim, đồng thời cuộn (scroll) phần tử chứa phim lên trên cùng (top), khi click lại phim đó thì ẩn phần tử nội dung phim

### /Trang tìm kiếm

Khi click vào nút tìm kiếm góc phải trên cùng (trên Navbar) sẽ điều hướng sang trang /search

khi điền form và enter sẽ trả về danh sách phim tìm được, khi click chọn phim thì hiển thị giới thiệu nội dung và trailer

# Về kỹ thuật

Sử dụng TailwindCSS và CSS module, ứng dụng được responsive design theo mobile-first

Danh mục mà 1 phần tử đc tái sử dụng, phần tử này chứa 1 context, mỗi danh mục khi thực thi thông qua function component sẽ gọi một api khác để lấy về danh sách phim tương ứng cho danh mục đó

Các hook được sử dụng gồm có contextAPI, useContext, useState, useRef, useEffect, và customHooks 

Lập trình bất đồng bộ (*async*) để fetch dữ liệu từ API về

2-way binding cho form input (trong trang /search)

Thao tác với DOM lấy giá trị tọa độ phần từ (để *srollTo*) 

Để **tối ưu hiệu suất**, phần hình ảnh poster phim sẽ tải hình có phân giải thấp trước và làm mờ ảnh bằng *blur*
Khi cuộn xuống đến phần tử poster thì mới tải ảnh có kích thước thật xuống, bắt sự kiện `'load'`, khi tải ảnh xong sẽ bỏ làm mờ bằng *blur* 
Cuối cùng hiển thị ra hình ảnh có phân giải tốt nhất

### Tổng hợp các kỹ năng được dùng

`TailwindCSS - CSS module `

`responsive design - mobile first`

`contextAPI, useContext, useState, useRef, useEffect và customHooks `

`Asynchronus`

`2-way binding`

`DOM`

`Optimization teachnique`

# Triển khai (deploy) trên Vercel

https://rjs301-asm2.vercel.app/

# All needed libraries


`npm install react-router-dom`

`npm install -D tailwindcss`

`npx tailwindcss init`

`npm i --save @fortawesome/fontawesome-svg-core`

`npm i --save @fortawesome/free-solid-svg-icons`

`npm i --save @fortawesome/free-regular-svg-icons`

`npm i --save @fortawesome/free-brands-svg-icons`

`npm i --save @fortawesome/react-fontawesome@latest  `

`npm install react-youtube`
