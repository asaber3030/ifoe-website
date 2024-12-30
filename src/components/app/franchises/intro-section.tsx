export const FranchisesIntro = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white shadow">
        <div className="mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">الامتيازات الخاصة بنا</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg p-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">مرحبًا بكم في IFOE</h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700">
                  اكتشف عالماً من الفرص مع مجموعتنا المتنوعة من الامتيازات. سواء كنت شغوفًا بالطعام
                  أو اللياقة البدنية أو الخدمات، لدينا الامتياز المثالي لمساعدتك في تحقيق أحلامك
                  الريادية.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">لماذا تختار IFOE؟</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>نماذج أعمال مثبتة مع اعتراف واسع بالعلامة التجارية</li>
                    <li>تدريب شامل ودعم مستمر</li>
                    <li>الوصول إلى أنظمة وتقنيات خاصة</li>
                    <li>مساعدة في التسويق والإعلانات</li>
                    <li>قوة شراء جماعية ومزايا في سلسلة التوريد</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
