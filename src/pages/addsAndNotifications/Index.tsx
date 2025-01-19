import React, { useState } from "react";

interface ToggleListProps {
	title: string;
	content: React.ReactNode;
}

const ToggleList: React.FC<ToggleListProps> = ({ title, content }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className=" mb-4">
			<div className=" font-bold text-md p-4 bg-gray-200 border border-gray-300 cursor-pointer" onClick={toggleOpen}>
				{title}
			</div>
			{isOpen && <div className="toggle-content p-4 border border-gray-300">{content}</div>}
		</div>
	);
};

const AnnouncementsAndNotifications: React.FC = () => {
	const regulationsContent = (
		<div>
			<p>
				تُعد روسيا وجهة شائعة للطلاب الدوليين، بما في ذلك الطلاب من الدول العربية واليمن. لتنظيم إقامتهم ودراستهم، هناك
				مجموعة من القوانين واللوائح التي يجب على الطلاب الالتزام بها لتجنب المشاكل القانونية. فيما يلي ملخص لأهم اللوائح
				والقوانين ذات العلاقة:
			</p>
			<hr className="my-4" />
			<h3 className="font-bold">1. التأشيرة والإقامة القانونية</h3>
			<ul className="list-disc list-inside">
				<li>
					<strong>تأشيرة الدراسة:</strong>
					<ul className="list-disc list-inside ml-4">
						<li>يجب على الطلاب الحصول على تأشيرة دراسية (Student Visa) صالحة لدخول روسيا.</li>
						<li>
							التأشيرة تكون مرتبطة بمؤسسة تعليمية محددة، ويُشترط تجديدها سنويا, إي تقديم الاوارق المطلوبة لقسم
							الاجانب للجامعة 40 يوما قبل انتهاء الفيزا السارية.
						</li>
					</ul>
				</li>
				<li>
					<strong>تسجيل الإقامة:</strong>
					<ul className="list-disc list-inside ml-4">
						<li>عند الوصول إلى روسيا، يجب على الطالب تسجيل إقامته في غضون 7 أيام عمل.</li>
						<li>يتم التسجيل لدى مصلحة الهجرة الفيدرالية (ФМС) بواسطة الجامعة أو السكن الذي يقيم فيه الطالب.</li>
					</ul>
				</li>
				<li>
					<strong>تحديث التسجيل:</strong>
					<ul className="list-disc list-inside ml-4">
						<li>عند تغيير السكن أو السفر إلى مدينة أخرى لأكثر من 7 أيام، يجب تحديث تسجيل الإقامة.</li>
					</ul>
				</li>
			</ul>
			<hr className="my-4" />
			<h3 className="font-bold">2. قوانين الهجرة والتنقل</h3>
			<ul className="list-disc list-inside">
				<li>
					<strong>قوانين السفر الداخلي:</strong>
					<ul className="list-disc list-inside ml-4">
						<li>
							يمكن للطلاب السفر داخل روسيا بحرية، بشرط أن يُبلغوا الجهات المعنية إذا تجاوزت مدة إقامتهم في مدينة
							أخرى 7 أيام.
						</li>
					</ul>
				</li>
				<li>
					<strong>مخالفات الهجرة:</strong>
					<ul className="list-disc list-inside ml-4">
						<li>
							يُعد انتهاك قوانين الهجرة (مثل التأخير في التسجيل أو الإقامة غير القانونية) سببًا لتغريم الطالب، وقد
							يؤدي إلى الترحيل.
						</li>
					</ul>
				</li>
			</ul>
			<hr className="my-4" />
			<h3 className="font-bold">3. الالتزام الأكاديمي</h3>
			<ul className="list-disc list-inside">
				<li>
					<strong>الحضور والنجاح:</strong>
					<ul className="list-disc list-inside ml-4">
						<li>تُشترط نسبة حضور معينة في المحاضرات والمقررات الدراسية.</li>
						<li>يجب على الطلاب اجتياز الاختبارات والامتحانات الدورية لتجنب فقدان مقعدهم الدراسي أو المنحة.</li>
					</ul>
				</li>
				<li>
					<strong>التغييرات الأكاديمية:</strong>
					<ul className="list-disc list-inside ml-4">
						<li>
							يُشترط إخطار الجامعة والجهات المعنية عند تغيير التخصص أو الجامعة، أو الانتقال بين المؤسسات الأكاديمية.
						</li>
					</ul>
				</li>
			</ul>
			<hr className="my-4" />
			<h3 className="font-bold">4. القوانين المتعلقة بالعمل</h3>
			<ul className="list-disc list-inside">
				<li>
					<strong>تصاريح العمل:</strong>
					<ul className="list-disc list-inside ml-4">
						<li>
							يُسمح للطلاب الأجانب بالعمل بدوام جزئي خارج أوقات الدراسة، بشرط الحصول على تصريح عمل من وزارة العمل
							الروسية.
						</li>
						<li>لا يُسمح بالعمل بدوام كامل إلا في الإجازات أو بعد إنهاء الدراسة.</li>
					</ul>
				</li>
			</ul>
			<hr className="my-4" />
			<h3 className="font-bold">5. قوانين السكن</h3>
			<ul className="list-disc list-inside">
				<li>
					<strong>السكن الجامعي:</strong>
					<ul className="list-disc list-inside ml-4">
						<li>الطلاب المقيمون في السكن الجامعي ملزمون بالالتزام بلوائح السكن، مثل:</li>
						<ul className="list-disc list-inside ml-4">
							<li>أوقات الدخول والخروج.</li>
							<li>منع التجمعات أو الأنشطة المخالفة.</li>
						</ul>
					</ul>
				</li>
				<li>
					<strong>استئجار شقة:</strong>
					<ul className="list-disc list-inside ml-4">
						<li>يجب توقيع عقد إيجار قانوني عند استئجار شقة، مع تسجيل الإقامة في العنوان الجديد.</li>
					</ul>
				</li>
			</ul>
			<hr className="my-4" />
			<h3 className="font-bold">6. الرعاية الصحية</h3>
			<ul className="list-disc list-inside">
				<li>
					<strong>التأمين الصحي:</strong>
					<ul className="list-disc list-inside ml-4">
						<li>التأمين الصحي إلزامي لجميع الطلاب الدوليين.</li>
						<li>يُغطي التأمين الخدمات الطبية الأساسية، مثل الفحوصات والعلاجات الطارئة.</li>
					</ul>
				</li>
			</ul>
			<hr className="my-4" />
			<h3 className="font-bold">7. احترام القوانين الروسية العامة</h3>
			<ul className="list-disc list-inside">
				<li>
					<strong>قوانين الهجرة:</strong>
					<ul className="list-disc list-inside ml-4">
						<li>يحظر على الطلاب دخول المناطق الحدودية دون تصريح رسمي.</li>
						<li>الالتزام بقوانين الهجرة يضمن عدم اتخاذ إجراءات عقابية أو إلغاء التأشيرة.</li>
					</ul>
				</li>
				<li>
					<strong>النظام العام:</strong>
					<ul className="list-disc list-inside ml-4">
						<li>
							يُشترط احترام القوانين الروسية، بما في ذلك قوانين المرور، السلوك العام، وتجنب أي نشاط سياسي قد يعتبر
							تدخلاً في الشؤون الداخلية للبلاد.
						</li>
					</ul>
				</li>
			</ul>
			<hr className="my-4" />
			<h3 className="font-bold">8. قوانين الإقامة الطويلة أو الدائمة</h3>
			<ul className="list-disc list-inside">
				<li>
					<strong>الطلاب الذين يكملون دراستهم يمكنهم التقديم للحصول على:</strong>
					<ul className="list-disc list-inside ml-4">
						<li>تصريح إقامة مؤقتة (RVP).</li>
						<li>تصريح إقامة دائمة (Permanent Residence) إذا استوفوا الشروط.</li>
					</ul>
				</li>
			</ul>
			<hr className="my-4" />
			<h3 className="font-bold">العقوبات المحتملة عند المخالفة</h3>
			<ol className="list-decimal list-inside">
				<li>الغرامات المالية.</li>
				<li>إلغاء التأشيرة الدراسية.</li>
				<li>الترحيل من البلاد مع منع الدخول لعدة سنوات.</li>
			</ol>
			<hr className="my-4" />
			<h3 className="font-bold">توصيات عامة</h3>
			<ul className="list-disc list-inside">
				<li>الالتزام بالمواعيد النهائية للتسجيل وتجديد التأشيرة.</li>
				<li>الاحتفاظ بنسخ من جواز السفر، التأشيرة، ووثائق التسجيل.</li>
				<li>التوجه إلى مكاتب الهجرة أو السفارة اليمنية لحل أي مشكلة قانونية.</li>
			</ul>
			<hr className="my-4" />
			<h3 className="font-bold">مصادر مفيدة</h3>
			<ul className="list-disc list-inside">
				<li>السفارة أو القنصلية اليمنية في روسيا.</li>
				<li>مكتب العلاقات الدولية في الجامعة.</li>
				<li>مصلحة الهجرة الفيدرالية الروسية (ФМС).</li>
			</ul>
		</div>
	);

	const costOfLivingContent = (
		<div>
			<p>
				تختلف تكاليف المعيشة في روسيا اعتمادًا على المدينة التي يعيش فيها الطالب، حيث تُعتبر موسكو وسانت بطرسبرغ الأغلى
				مقارنةً بالمدن الإقليمية مثل كراسنودار، فورونيج، أو تامبوف. هنا نظرة عامة على تكاليف الحياة بناءً على الأسعار
				الحالية لعام 2024.
			</p>
			<hr className="my-4" />
			<h3 className="font-bold">نفقات المعيشة الشهرية</h3>
			<ul className="list-disc list-inside">
				<li>
					<strong>في مدن مثل فورونيج أو تامبوف أو كراسنودار:</strong>
					<p>تتراوح النفقات الشهرية للطالب بين 150 إلى 300 دولار، وتشمل الطعام، المواصلات، والإنترنت.</p>
				</li>
				<li>
					<strong>في موسكو:</strong>
					<p>
						تصل النفقات الشهرية إلى 400 الى 700 دولار نظرًا لارتفاع أسعار الإيجارات والطعام والمواصلات مقارنة بالمدن
						الأخرى.
					</p>
				</li>
			</ul>
			<hr className="my-4" />
			<h3 className="font-bold">أسعار المواد الغذائية الأساسية (2024)</h3>
			<table className="w-full border-collapse border border-gray-300">
				<thead>
					<tr>
						<th className="border border-gray-300 p-2">الصنف</th>
						<th className="border border-gray-300 p-2">السعر (دولار)</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="border border-gray-300 p-2">لتر حليب</td>
						<td className="border border-gray-300 p-2">0.80</td>
					</tr>
					<tr>
						<td className="border border-gray-300 p-2">خبز لشخصين</td>
						<td className="border border-gray-300 p-2">0.60</td>
					</tr>
					<tr>
						<td className="border border-gray-300 p-2">لحم بقري (1 كيلو)</td>
						<td className="border border-gray-300 p-2">7.00</td>
					</tr>
					<tr>
						<td className="border border-gray-300 p-2">دجاج (1.5 كيلو)</td>
						<td className="border border-gray-300 p-2">3.50</td>
					</tr>
					<tr>
						<td className="border border-gray-300 p-2">بيض (10 حبات)</td>
						<td className="border border-gray-300 p-2">1.50</td>
					</tr>
					<tr>
						<td className="border border-gray-300 p-2">موز (1 كيلو)</td>
						<td className="border border-gray-300 p-2">1.20</td>
					</tr>
					<tr>
						<td className="border border-gray-300 p-2">بطاطس (1 كيلو)</td>
						<td className="border border-gray-300 p-2">0.40</td>
					</tr>
				</tbody>
			</table>
			<hr className="my-4" />
			<h3 className="font-bold">المواصلات</h3>
			<ul className="list-disc list-inside">
				<li>
					<strong>سعر تذكرة الباص أو المترو في موسكو:</strong>
					<p>60 روبل ما يعادل 0.55 دولار</p>
				</li>
				<li>
					<strong>توفر بطاقات شهرية للطلاب بأسعار مخفضة، حيث تصل إلى 7-10 دولار شهريًا.</strong>
				</li>
			</ul>
			<hr className="my-4" />
			<h3 className="font-bold">الإنترنت والاتصالات</h3>
			<ul className="list-disc list-inside">
				<li>
					<strong>متوسط تكلفة الاشتراك الشهري للإنترنت غير المحدود:</strong>
					<p>450 روبل ما يعادل 6 دولا.</p>
				</li>
				<li>
					<strong>باقات الهاتف المحمول، بما في ذلك الإنترنت والمكالمات:</strong>
					<p>تبدأ من 7-12 دولار شهريًا.</p>
				</li>
			</ul>
			<hr className="my-4" />
			<h3 className="font-bold">النشاطات الرياضية والترفيهية</h3>
			<ul className="list-disc list-inside">
				<li>
					<strong>رسوم الاشتراك في النادي الرياضي:</strong>
					<p>تتراوح بين 35 إلى 60 دولار شهريًا حسب الخدمات المقدمة.</p>
				</li>
				<li>
					<strong>تذاكر السينما:</strong>
					<p>5-7 دولار للفيلم.</p>
				</li>
			</ul>
			<hr className="my-4" />
			<h3 className="font-bold">الإقامة والسكن</h3>
			<ul className="list-disc list-inside">
				<li>
					<strong>الإقامة في نُزُل أو فندق اقتصادي مع حمام خاص:</strong>
					<p>25-40 دولار لليلة الواحدة.</p>
				</li>
				<li>
					<strong>سكن طلابي داخل الجامعات:</strong>
					<p>يتراوح بين 30 إلى 100 دولار شهريًا حسب الخدمات المقدمة والموقع.</p>
				</li>
			</ul>
			<hr className="my-4" />
			<h3 className="font-bold">الملابس</h3>
			<p>
				أسعار الملابس الشتوية في روسيا مناسبة مقارنة بالدول الغربية، مع خيارات اقتصادية وجودة عالية تناسب المناخ الروسي.
				تتراوح تكلفة شراء قبعة، وشاح، معطف شتوي، وحذاء بين 150 إلى 300 دولار اعتمادًا على العلامة التجارية.
			</p>
			<hr className="my-4" />
			<p>
				توفر روسيا خيارات معيشية متنوعة تناسب الميزانيات المختلفة. بينما تكون الحياة في المدن الكبرى مثل موسكو مكلفة
				نسبيًا، يمكن للطلاب في المدن الإقليمية الاستمتاع بتكاليف معيشة أقل مع نفس جودة التعليم والخدمات.
			</p>
		</div>
	);

	return (
		<div className="p-4 max-w-7xl mx-auto">
			<h1 className="text-2xl font-bold text-gray-900 mb-6">الإعلانات والإشعارات</h1>
			<div className="border border-gray-300 p-4 rounded-lg shadow-sm space-y-4">
				<ToggleList title="اللوائح والقوانين المتعلقة بالطلاب الدراسين في روسيا الاتحادية" content={regulationsContent} />
				<ToggleList
					title="تكاليف الحياة في روسيا لعام 2024: دليلك الشامل للمعيشة الطلابية"
					content={costOfLivingContent}
				/>
				<ToggleList title="تعليمات الملحقية" content={<h1>قريبا</h1>} />
				<ToggleList title="تعليمات الوزارة" content={<h1>قريبا</h1>} />
				<ToggleList title="التسجيل في المنح الروسية" content={<h1>قريبا</h1>} />
				<ToggleList title="احصائيات طلابية" content={<h1>قريبا</h1>} />
				<ToggleList title="الدراسة في روسيا" content={<h1>قريبا</h1>} />
				<ToggleList title="دليل الجامعات الروسية المعتمدة" content={<h1>قريبا</h1>} />
			</div>
		</div>
	);
};

export default AnnouncementsAndNotifications;
