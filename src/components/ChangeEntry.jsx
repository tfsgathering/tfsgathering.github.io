function ChangeEntry({date, head, children}) {
	return (
		<div className="change__card">
			<div className="change__date">
			{date}
			</div>
			<div className="change__content">
				<div className="change__title">{head}</div>
				<p className="change__description">{children}</p>
			</div>
		</div>
	);
}

export default ChangeEntry;
