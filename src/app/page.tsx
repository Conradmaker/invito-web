/* eslint-disable @next/next/no-img-element */
"use client";
import Footer from "@/components/Footer";
import Button from "@/components/System/Button";
import Header from "@/components/System/Header";
import Typo from "@/components/System/Typo";
import {useRouter} from "next/navigation";
import {LuArrowRight} from "react-icons/lu";

export default function Home() {
  const {push} = useRouter();
  return (
    <main className="flex min-h-screen flex-col w-[100%]">
      <div className="bg-[#f8fafc]">
        <Header />

        <div className="flex max-w-[1240px] mx-auto">
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-6xl font-black leading-tight">
              상상하던 모바일 초대장
              <br />
              쉽게 <span className="text-blue-600 font-black">무료로</span> 만들어 보세요.
            </h1>

            <p className="text-lg mt-6">
              개발자, 디자이너가 아니어도 하고싶은 디자인을
              <br />
              자유롭게 구성하여 초대장을 만들 수 있습니다.
            </p>

            <div className="flex mt-20 gap-4">
              <Button size="xl" onClick={() => push(`/auth`)}>
                &nbsp;&nbsp;&nbsp;시작하기&nbsp;&nbsp;&nbsp;
              </Button>
              <Button size="xl" type="tertiary" onClick={() => push(`/auth/signup`)}>
                &nbsp;&nbsp;&nbsp;회원가입&nbsp;&nbsp;&nbsp;
              </Button>
            </div>
            <div></div>
          </div>
          <div className="flex py-28">
            <img
              className="hover:animate-pulse"
              src="/img/3d-glassy-modern-mobile-phone-mockup-with-abstract-shapes-and-spheres.png"
              alt=""
              draggable={false}
            />
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] w-full py-20 mx-auto">
        <ul className="flex gap-24 justify-between">
          <li className="flex items-center gap-5">
            <div className="rounded-full bg-blue-50 w-[88px] h-[88px] flex items-center justify-center">
              <img
                className="w-2/3"
                src="/img/3d-glassy-iridescent-connections-in-a-glass-molecule.png"
                alt=""
              />
            </div>
            <div className="flex-1">
              <Typo.Heading level={4} whiteSpace="nowrap">
                팀으로 <span className="text-blue-800">작업물을 공유</span>하고, <br />
                피드백을 주고받으세요.
              </Typo.Heading>
            </div>
          </li>
          <li className="flex items-center gap-5">
            <div className="rounded-full bg-blue-50 w-[88px] h-[88px] flex items-center justify-center">
              <img
                className="w-2/3"
                src="/img/3d-glassy-two-deformed-thin-lenses.png"
                alt=""
              />
            </div>
            <div className="flex-1">
              <Typo.Heading level={4} whiteSpace="nowrap">
                요소를 자유롭게 조합하여 <br />
                <span className="text-blue-800">원하는 디자인</span>을 만들어보세요.
              </Typo.Heading>
            </div>
          </li>
          <li className="flex items-center gap-5">
            <div className="rounded-full bg-blue-50 w-[88px] h-[88px] flex items-center justify-center">
              <img className="w-2/3" src="/img/3d-glassy-rope-knot-shape.png" alt="" />
            </div>
            <div className="flex-1">
              <Typo.Heading level={4} whiteSpace="nowrap">
                모든 기능을 <span className="text-blue-800">영원히 무료</span>로 <br />
                사용할 수 있습니다.
              </Typo.Heading>
            </div>
          </li>
        </ul>
      </div>

      <div className="max-w-[1240px] mx-auto w-full py-24">
        <h1 className="text-5xl font-black leading-snug">
          처음이신가요? <br /> <span className="text-blue-600">템플릿</span>으로 초대장을{" "}
          <span className="text-blue-600 underline underline-offset-8">
            가장 빠르게 🚅
          </span>{" "}
          만들어보세요.
        </h1>
        <hr className="my-16" />
        <ul className="flex gap-24">
          <li className="flex flex-1 flex-col gap-2">
            <Typo.Heading level={3}>결혼식</Typo.Heading>
            <Typo.Body mt={12} mb={20}>
              비싼 웨딩플래너를 고용하지 않고도, 템플릿을 사용하여 <br />
              원하는 디자인으로 초대장을 만들어보세요.
            </Typo.Body>
            <div>
              <Button size="md" type="secondary" rightIcon={<LuArrowRight />}>
                사용해보기
              </Button>
            </div>
          </li>
          <li className="flex flex-1 flex-col gap-2">
            <Typo.Heading level={3}>파티</Typo.Heading>
            <Typo.Body mt={12} mb={20}>
              연말파티, 생일파티와 같은 특별한 날을 <br />
              모바일 초대장으로 더 특별하게 만들어보세요.
            </Typo.Body>
            <div>
              <Button size="md" type="secondary" rightIcon={<LuArrowRight />}>
                사용해보기
              </Button>
            </div>
          </li>
          <li className="flex flex-1 flex-col gap-2">
            <Typo.Heading level={3}>돌잔치</Typo.Heading>
            <Typo.Body mt={12} mb={20}>
              소중한 아이의 돌잔치를 모바일 초대장으로 <br />더 특별하게 간직해 보세요.
            </Typo.Body>
            <div>
              <Button size="md" type="secondary" rightIcon={<LuArrowRight />}>
                사용해보기
              </Button>
            </div>
          </li>
        </ul>
        <div className="flex mt-16 mb-24 max-w-sm mx-auto">
          <Button type="tertiary" block size="xl" rightIcon={<LuArrowRight />}>
            모든 템플릿 보기
          </Button>
        </div>
      </div>
      <Footer />
    </main>
  );
}
