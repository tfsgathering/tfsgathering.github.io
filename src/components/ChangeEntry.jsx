function ChangeEntry({date, head, children}) {
	return (
		<div class="change__card">
			<div class="change__date">
			{date}
			</div>
			<div class="change__content">
				<div className="change__title">{head}</div>
				<p className="change__description">{children}</p>
			</div>
		</div>
	);
}

export default ChangeEntry;
