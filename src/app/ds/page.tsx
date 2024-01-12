"use client";
import Button from "@/components/System/Button";
import Accordion from "@/components/System/Collapse/Accordion";
import Input from "@/components/System/Input";
import Menu from "@/components/System/Menu";
import Pop from "@/components/System/Pop";
import Typo from "@/components/System/Typo";
import {
  RxArchive,
  RxAvatar,
  RxBarChart,
  RxBell,
  RxComponent1,
  RxFontItalic,
  RxLayers,
  RxPieChart,
} from "react-icons/rx";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24 w-[100%]">
      <Menu.Dropdown>
        <Button.Icon>
          <RxComponent1 />
        </Button.Icon>
      </Menu.Dropdown>
      <Menu.Navbar />
      <Typo.Heading level={2} mb={44}>
        타이포 그라피
      </Typo.Heading>
      <div className="flex justify-between">
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
      <div className="flex w-full gap-24">
        <div className="flex flex-col gap-5 items-start">
          <Typo.Heading level={3} mb={4}>
            XSmall
          </Typo.Heading>
          <Button type="primary" size="xs">
            Primary 버튼
          </Button>
          <Button type="secondary" size="xs">
            Secondary 버튼
          </Button>
          <Button type="tertiary" size="xs">
            Tertiary 버튼
          </Button>
          <Button type="ghost" size="xs">
            Ghost 버튼
          </Button>
        </div>
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
          <Button type="primary" size="xs" loading>
            버튼
          </Button>
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
          <Button.Icon type="primary">
            <RxBell />
          </Button.Icon>
          <Button.Icon type="secondary" size="md" loading>
            <RxBell />
          </Button.Icon>
          <Button.Icon type="tertiary" size="lg">
            <RxBell />
          </Button.Icon>
          <Button.Icon type="ghost" size="lg">
            <RxBell />
          </Button.Icon>
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
      {/* 인풋 */}
      <Typo.Heading level={2} mb={24} mt={80}>
        Input 인풋
      </Typo.Heading>
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-4">
          <Typo.Heading level={3} mb={12}>
            Size
          </Typo.Heading>
          <Input size="xs" placeholder="PlaceHolder XSmall" />
          <Input size="sm" placeholder="PlaceHolder Small" />
          <Input size="md" placeholder="PlaceHolder Medium" />
          <Input size="lg" placeholder="PlaceHolder Large" />
          <Input size="md" disabled placeholder="Disabled" />
        </div>

        <div className="flex flex-col gap-4">
          <Typo.Heading level={3} mb={12}>
            With Message
          </Typo.Heading>
          <Input size="sm" placeholder="Error" error="에러입니다." />
          <Input size="sm" placeholder="Info" info="인포입니다." />
        </div>

        <div className="flex flex-col gap-4">
          <Typo.Heading level={3} mb={12}>
            With Button
          </Typo.Heading>
          <div className="flex gap-2">
            <Input size="xs" />
            <Button size="xs">확인</Button>
          </div>
          <div className="flex gap-2">
            <Input size="sm" />
            <Button size="sm">확인</Button>
          </div>
          <div className="flex gap-2">
            <Input size="md" />
            <Button size="md">확인</Button>
          </div>
          <div className="flex gap-2">
            <Input size="lg" />
            <Button size="lg">확인</Button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Typo.Heading level={3} mb={12}>
            With Prefix
          </Typo.Heading>
          <Input size="xs" prefix={<RxAvatar />} />
          <Input size="sm" prefix={<RxAvatar />} />
          <Input size="md" prefix={<RxAvatar />} />
          <Input size="lg" prefix={<RxAvatar />} />
          <Input size="sm" prefix={<Typo.Body color="secondary">유저1:</Typo.Body>} />
          <Input size="sm" prefix={"유저1:"} />
        </div>
      </div>
      {/* 스위치 */}
      <Typo.Heading level={2} mb={24} mt={80}>
        Check Input 체크 인풋
      </Typo.Heading>
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-4">
          <Typo.Heading level={3} mb={0}>
            Switch 스위치
          </Typo.Heading>
          <Input.Switch size="xs" />
          <Input.Switch size="sm" />
          <Input.Switch size="md" />
          <Input.Switch size="lg" />
        </div>

        <div className="flex flex-col gap-5 items-start">
          <Typo.Heading level={3} mb={4}>
            Toggle 토글
          </Typo.Heading>
          <div className="flex gap-2">
            <Input.Toggle size="xs" value="b" icon={<RxFontItalic />} />
            <Input.Toggle size="xs" value="b" icon={<RxFontItalic />} text="이텔릭" />
          </div>
          <div className="flex gap-2">
            <Input.Toggle value="b" icon={<RxFontItalic />} />
            <Input.Toggle value="b" icon={<RxFontItalic />} text="이텔릭" />
          </div>
          <div className="flex gap-2">
            <Input.Toggle value="b" icon={<RxFontItalic />} size="md" />
            <Input.Toggle value="b" icon={<RxFontItalic />} size="md" text="이텔릭" />
          </div>
          <div className="flex gap-2">
            <Input.Toggle size="lg" value="b" icon={<RxFontItalic />} />
            <Input.Toggle size="lg" value="a" icon={<RxFontItalic />} text="이텔릭" />
          </div>
          <Input.Toggle.Group
            data={[
              {icon: <RxBarChart />, value: "bar"},
              {icon: <RxPieChart />, value: "pie"},
            ]}
          />
        </div>
        <div className="flex flex-col gap-5 items-start">
          <Typo.Heading level={3} mb={4}>
            ToggleGroup 토글그룹
          </Typo.Heading>
          <div className="flex gap-2">
            <Input.Toggle.Group
              size="xs"
              data={[
                {icon: <RxBarChart />, value: "bar"},
                {icon: <RxPieChart />, value: "pie"},
              ]}
            />
            <Input.Toggle.Group
              size="xs"
              data={[
                {icon: <RxBarChart />, value: "bar", text: "막대차트"},
                {icon: <RxPieChart />, value: "pie", text: "파이차트"},
              ]}
            />
          </div>

          <div className="flex gap-2">
            <Input.Toggle.Group
              data={[
                {icon: <RxBarChart />, value: "bar"},
                {icon: <RxPieChart />, value: "pie"},
              ]}
            />
            <Input.Toggle.Group
              data={[
                {icon: <RxBarChart />, value: "bar", text: "막대차트"},
                {icon: <RxPieChart />, value: "pie", text: "파이차트"},
              ]}
            />
          </div>

          <div className="flex gap-2">
            <Input.Toggle.Group
              size="md"
              data={[
                {icon: <RxBarChart />, value: "bar"},
                {icon: <RxPieChart />, value: "pie"},
              ]}
            />
            <Input.Toggle.Group
              size="md"
              data={[
                {icon: <RxBarChart />, value: "bar", text: "막대차트"},
                {icon: <RxPieChart />, value: "pie", text: "파이차트"},
              ]}
            />
          </div>
          <div className="flex gap-2">
            <Input.Toggle.Group
              size="lg"
              data={[
                {icon: <RxBarChart />, value: "bar"},
                {icon: <RxPieChart />, value: "pie"},
              ]}
            />
            <Input.Toggle.Group
              size="lg"
              data={[
                {icon: <RxBarChart />, value: "bar", text: "막대차트"},
                {icon: <RxPieChart />, value: "pie", text: "파이차트"},
              ]}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Typo.Heading level={3} mb={0}>
            Select 셀렉트
          </Typo.Heading>
          <Input.Select
            size="xs"
            placeholder="XSmall 사이즈"
            data={[{label: "a", value: "a"}]}
          />
          <Input.Select
            size="sm"
            placeholder="Small 사이즈"
            data={[{label: "a", value: "a"}]}
          />
          <Input.Select
            size="md"
            placeholder="Medium 사이즈"
            data={[{label: "a", value: "a"}]}
          />
          <Input.Select
            size="lg"
            placeholder="Large 사이즈"
            data={[{label: "a", value: "a"}]}
          />
        </div>
      </div>
      {/* 라벨 */}
      <Typo.Heading level={2} mb={24} mt={80}>
        Label
      </Typo.Heading>
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-4">
          <Typo.Heading level={3} mb={0}>
            Horizontal 라벨
          </Typo.Heading>
          <Input.Label title="스위치" direction="horizontal">
            <Input.Switch size="sm" />
          </Input.Label>
          <Input.Label title="토글 그룹" direction="horizontal">
            <Input.Toggle.Group />
          </Input.Label>
          <Input.Label title="인풋" direction="horizontal">
            <Input size="sm" />
          </Input.Label>
        </div>

        <div className="flex flex-col gap-5 items-start">
          <Typo.Heading level={3} mb={4}>
            Vertical 라벨
          </Typo.Heading>
          <Input.Label title="닉네임">
            <Input size="sm" placeholder="닉네임을 입력해주세요." />
          </Input.Label>
          <Input.Label title="asd">
            <Input.Toggle value="b" icon={<RxFontItalic />} />
          </Input.Label>
          <Input.Label title="asd">
            <Input.Toggle.Group
              data={[
                {icon: <RxArchive />, value: "asd"},
                {icon: <RxArchive />, value: "asd2"},
              ]}
            />
          </Input.Label>
        </div>

        <div className="flex flex-col gap-4">
          <Typo.Heading level={3} mb={0}>
            With Description
          </Typo.Heading>
          <Input.Label title="이메일" desc="ex) yhg0337@gmail.com">
            <Input size="sm" />
          </Input.Label>
          <Input.Label title="닉네임" desc="사용하실 이름을 지정해주세요.">
            <Input size="md" />
          </Input.Label>
          <Input.Label title="성별" desc="남자 / 여자를 선택해주세요.">
            <Input.Select
              size="sm"
              placeholder="Small 사이즈"
              data={[{label: "a", value: "a"}]}
            />
          </Input.Label>
        </div>
      </div>
      {/* 슬라이더 */}
      <Typo.Heading level={2} mb={24} mt={80}>
        Slider 슬라이더
      </Typo.Heading>
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-4">
          <Typo.Heading level={3} mb={0}>
            Shape - Bar
          </Typo.Heading>
          <Input.Slider size="sm" />
          <Input.Slider />
          <Input.Slider size="lg" />
        </div>
        <div className="flex flex-col gap-4">
          <Typo.Heading level={3} mb={12}>
            Shape - Round
          </Typo.Heading>
          <Input.Slider size="sm" shape="round" />
          <Input.Slider shape="round" />
          <Input.Slider size="lg" shape="round" />
        </div>
      </div>
      {/* 셀렉트 */}
      <Typo.Heading level={2} mb={24} mt={80}>
        Select 셀렉트
      </Typo.Heading>
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-5 items-start">
          <Typo.Heading level={3} mb={4}>
            Tooltip
          </Typo.Heading>
          <Pop.Tooltip content="Add to library">
            <Button.Icon type="primary" size="xs">
              <RxArchive />
            </Button.Icon>
          </Pop.Tooltip>

          <Pop.Tooltip content="Add to library">
            <Button.Icon type="primary">
              <RxArchive />
            </Button.Icon>
          </Pop.Tooltip>

          <Pop.Tooltip content="Add to library">
            <Button.Icon type="tertiary" size="md">
              <RxArchive />
            </Button.Icon>
          </Pop.Tooltip>
          <Pop.Tooltip content="툴팁이용">
            <Button.Icon type="tertiary" size="lg">
              <RxArchive />
            </Button.Icon>
          </Pop.Tooltip>
        </div>

        <div className="flex flex-col gap-5 items-start">
          <Typo.Heading level={3} mb={4}>
            Accordion
          </Typo.Heading>
          <Accordion
            data={[
              {
                title: "구성요소",
                content: `Yes! You can animate the Accordion with CSS or JavaScript.Yes! You can animate the Accordion with CSS or JavaScript.`,
              },
              {
                title: "설정",
                content: (
                  <div>
                    <Pop.Tooltip content="Add to library">
                      <Button.Icon type="ghost" size="sm">
                        <RxArchive />
                      </Button.Icon>
                    </Pop.Tooltip>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </div>
    </main>
  );
}
