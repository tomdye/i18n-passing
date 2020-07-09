import { create, tsx } from '@dojo/framework/core/vdom';
import Pagination from '@dojo/widgets/pagination';
import Calendar from '@dojo/widgets/calendar';
import commonBundle from '@dojo/widgets/common/nls/common';
import { Bundle, Messages } from '@dojo/framework/i18n/i18n';

const factory = create();

const calendarI18NMap = new Map<Bundle<Messages>, Bundle<Messages>>();
calendarI18NMap.set(commonBundle, {
	locales: commonBundle.locales, 
	messages: { 
		...commonBundle.messages, 
		monShort: '星期一',
		tueShort: '星期二',
		wedShort: '星期三',
		thuShort: '星期四',
		friShort: '星期五',
		satShort: '星期六',
		sunShort: '星期日'
	} 
});

export default factory(function App() {
	return <virtual>
			<Pagination
				initialPage={5}
				total={10}
				i18nBundle={{ messages: { next: '下一个', previous: '以前'} }}
			/>
			<Calendar i18nBundle={ calendarI18NMap as any } />
	</virtual>
});
