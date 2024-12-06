export const ZaloContact = () => {
	return (
		<div className="fixed bottom-32 right-9 z-[9999999] w-10 h-10">
			<a id="zalo-btn" href="https://zalo.me/0707261825" target="_blank" rel="noopener nofollow">
				<div className="absolute top-[-4px] left-[-4px] w-12 h-12 border-2 border-[#1182FC] opacity-50 rounded-full animate-zoomIn"></div>
				<span className="flex items-center justify-center w-10 h-10 bg-[#1182FC] rounded-full">
					<img
						src="https://vutruso.com/wp-content/uploads/2024/05/zalo-2.png"
						alt="Contact Me on Zalo"
						className="w-full h-auto"
					/>
				</span>
			</a>
		</div>
	);
};
