"use client";
import Button from "@/components/System/Button";
import Typo from "@/components/System/Typo";
import {RxComponent1, RxLayers} from "react-icons/rx";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <Typo.Heading level={2} mb={44}>
        타이포 그라피
      </Typo.Heading>
      <div className="flex justify-between w-10/12">
        <div className="flex flex-col gap-4">
          <Typo.Heading level={3} mb={12}>
            Heading 헤딩
          </Typo.Heading>
          <Typo.Heading level={1}>Heading1. 타이포그라피</Typo.Heading>
          <Typo.Heading level={2}>Heading2 타이포그라피</Typo.Heading>
          <Typo.Heading level={3}>Heading3 타이포그라피</Typo.Heading>
          <Typo.Heading level={4}>Heading4 타이포그라피</Typo.Heading>
          <Typo.Heading level={5}>Heading5 타이포그라피</Typo.Heading>
        </div>
        <div className="flex flex-col gap-4">
          <Typo.Heading level={3} mb={4}>
            Body 바디
          </Typo.Heading>
          <Typo.Heading level={4}>Body Weight 폰트 굵기</Typo.Heading>
          <Typo.Body>Regular 레귤러 바디 (Base Font)</Typo.Body>
          <Typo.Body weight="medium">Medium 미디엄 바디</Typo.Body>
          <Typo.Body weight="strong">Strong 스트롱 바디</Typo.Body>
          <Typo.Heading level={4} mt={8}>
            Body Color 폰트 색상
          </Typo.Heading>
          <Typo.Body>Primary 타이포그라피</Typo.Body>
          <Typo.Body color="secondary">Secondary 타이포그라피</Typo.Body>
          <Typo.Body color="highlight">Highlight 타이포그라피</Typo.Body>
        </div>
        <div className="flex flex-col gap-4">
          <Typo.Heading level={3} mb={4}>
            Description 설명
          </Typo.Heading>
          <Typo.Desc>Description 타이포그라피</Typo.Desc>
        </div>
      </div>
      <Typo.Heading mt={60} level={2} mb={44}>
        버튼
      </Typo.Heading>
      <div className="flex w-10/12 gap-24">
        <div className="flex flex-col gap-5 items-start">
          <Typo.Heading level={3} mb={4}>
            Small
          </Typo.Heading>
          <Button type="primary">Primary 버튼</Button>
          <Button type="secondary">Secondary 버튼</Button>
          <Button type="tertiary">Tertiary 버튼</Button>
          <Button type="ghost">Ghost 버튼</Button>
        </div>
        <div className="flex flex-col gap-5 items-start">
          <Typo.Heading level={3} mb={4}>
            Medium
          </Typo.Heading>
          <Button type="primary" size="md">
            Primary 버튼
          </Button>
          <Button type="secondary" size="md">
            Secondary 버튼
          </Button>
          <Button type="tertiary" size="md">
            Tertiary 버튼
          </Button>
          <Button type="ghost" size="md">
            Ghost 버튼
          </Button>
        </div>
        <div className="flex flex-col gap-5 items-start">
          <Typo.Heading level={3} mb={4}>
            Large
          </Typo.Heading>
          <Button type="primary" size="lg">
            Primary 버튼
          </Button>
          <Button type="secondary" size="lg">
            Secondary 버튼
          </Button>
          <Button type="tertiary" size="lg">
            Tertiary 버튼
          </Button>
          <Button type="ghost" size="lg">
            Ghost 버튼
          </Button>
        </div>
        <div className="flex flex-col gap-5 items-start">
          <Typo.Heading level={3} mb={4}>
            Loading
          </Typo.Heading>
          <Button type="primary" loading>
            버튼
          </Button>
          <Button type="secondary" loading>
            버튼
          </Button>
          <Button type="tertiary" loading>
            버튼
          </Button>
          <Button type="ghost" loading>
            버튼
          </Button>
        </div>
        <div className="flex flex-col gap-5 items-start">
          <Typo.Heading level={3} mb={4}>
            Disabled
          </Typo.Heading>
          <Button type="primary" disabled>
            버튼
          </Button>
          <Button type="secondary" disabled>
            버튼
          </Button>
          <Button type="tertiary" disabled>
            버튼
          </Button>
          <Button type="ghost" disabled>
            버튼
          </Button>
        </div>
        <div className="flex flex-col gap-5 items-start">
          <Typo.Heading level={3} mb={4}>
            Only&nbsp;Icon
          </Typo.Heading>
          <Button.Icon type="primary" />
          <Button.Icon type="secondary" size="md" loading />
          <Button.Icon type="tertiary" size="lg" />
          <Button.Icon type="ghost" size="lg" />
        </div>
        <div className="flex flex-col gap-5 items-start">
          <Typo.Heading level={3} mb={4}>
            With&nbsp;Icon
          </Typo.Heading>
          <Button type="primary" leftIcon={<RxComponent1 />} rightIcon={<RxLayers />}>
            버튼
          </Button>
          <Button type="secondary" leftIcon={<RxComponent1 />}>
            버튼
          </Button>
          <Button type="tertiary" leftIcon={<RxComponent1 />}>
            버튼
          </Button>
          <Button type="ghost" leftIcon={<RxComponent1 />}>
            버튼
          </Button>
        </div>
      </div>
    </main>
  );
}
