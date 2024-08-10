function autoIsi() {
		var btns = document.querySelectorAll("div.grid > button");
		let pos = 0;
		btns.forEach(function(btn, n) {
			if (n % 6 == 0) {
				setTimeout(function() {
					btn.click();
				}, 1000 * pos);
				pos++;
			}
		});
	}
	function skipTes() {
		document.querySelector("input[type=submit]").click();
	}
	var div = document.createElement("div");
	div.style = "position:absolute;left:50%";
	div.innerHTML = '<button class="text-white bg-[#f59e0b] hover:bg-[#f59e0b]/90 active::bg-[#f59e0b]/50 focus:outline-none focus:ring-[#f59e0b]/50 font-poppins-medium rounded-lg text-sm px-4 py-4 text-center shadow-md mx-4" onclick="skipTes()">SKIP</button><button class="text-white bg-[#f59e0b] hover:bg-[#f59e0b]/90 active::bg-[#f59e0b]/50 focus:outline-none focus:ring-[#f59e0b]/50 font-poppins-medium rounded-lg text-sm px-4 py-4 text-center shadow-md my-8" onclick="autoIsi()">AUTO</button>';
	document.querySelector('header nav div.container div.flex').appendChild(div);
