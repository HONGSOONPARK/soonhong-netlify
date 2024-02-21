import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Soonhong</title>
      </Head>

      <main>
        <Header title="순홍 "강화주사위" 개인정보처리 방침" />
      <p className="description">
        본 개인정보처리 방침은 순홍("회사")이 개발한 "강화주사위" 앱 및 관련 서비스("서비스")에 대한 개인정보 수집, 사용, 보호에 관한 내용을 설명합니다.
    </p>

    <h2 className="description">1. 수집하는 개인정보의 종류 및 수집 목적</h2>

    <p className="description">1.1 앱 사용자의 디바이스 정보(디바이스 모델, 운영체제 버전 등)를 수집합니다. 이 정보는 앱의 최적화 및 기능 개선을 위해 사용됩니다.</p>

    <p className="description">1.2 앱 내 사용자의 프로필 정보(사용자 이름, 이메일 주소 등)를 수집할 수 있습니다. 이 정보는 사용자 간 상호 작용을 위해 사용되며, 서비스 품질 향상을 위한 통계 및 분석에 활용될 수 있습니다.</p>

    <h2 className="description">2. 개인정보의 보유 및 이용기간</h2>

    <p className="description">2.1 회사는 수집된 개인정보를 앱 서비스 제공 및 관리 목적으로만 사용하며, 이용 목적이 달성된 후에는 지체 없이 파기됩니다.</p>

    <h2 className="description">3. 개인정보의 제공 및 공유</h2>

    <p className="description">3.1 회사는 법률적 의무를 준수하기 위해 정부 기관 등에 개인정보를 제공할 수 있습니다.</p>

    <p className="description">3.2 회사는 사용자의 동의 없이 개인정보를 제3자와 공유하지 않습니다.</p>

    <h2 className="description">4. 개인정보의 보안조치</h2>

    <p className="description">4.1 회사는 적절한 기술적, 물리적, 관리적 보안조치를 통해 개인정보를 안전하게 보호합니다.</p>

    <h2 className="description">5. 이용자의 권리와 의무</h2>

    <p className="description">5.1 이용자는 자신의 개인정보에 대한 열람, 정정, 삭제를 요청할 수 있습니다.</p>

    <p className="description">5.2 앱 사용자는 본 개인정보처리 방침에 동의하지 않을 권리가 있으며, 동의를 거부할 경우 앱의 일부 기능 이용이 제한될 수 있습니다.</p>

    <h2 className="description">6. 개인정보 관리 책임자</h2>

    <p className="description">
        6.1 개인정보 관리 책임자는 다음과 같습니다.
        <ul className="description">
            <li>이름: Soon Park</li>
            <li>이메일: kongsooni39@gmail.com</li>
            <li>전화번호: 02-1002-3010</li>
        </ul>
    </p>

    <h2 className="description">7. 개인정보처리 방침 변경에 대한 공지</h2>

    <p className="description">7.1 개인정보처리 방침이 변경될 경우, 변경 내용을 앱 내에 공지하고 홈페이지를 통해 이용자에게 알립니다.</p>

    <p className="description">본 개인정보처리 방침은 [2024-02-21]에 마지막으로 업데이트되었습니다.</p>


      </main>

    </div>
  )
}
