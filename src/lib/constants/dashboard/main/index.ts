 export const leftPaneData: IMainSection[] = [
    {
        id: "1",
        heading: "Description",
        paragraph: "Lorem ipsum dolor sit amet consectetur. Aenean sodales pellentesque gravida nibh et magna faucibus. Dui commodo ut metus amet egestas habitant viverra. Quisque fusce senectus facilisis non diam leo nulla sem pellentesque. Sit in vel sed cursus metus sit fringilla vestibulum.",
    },
    {
        id: "2",
        heading: "Extra",
        paragraph: "Lorem ipsum dolor sit amet consectetur. Tempus a id adipiscing fames egestas tellus dis pretium tempus. Justo nisl nisl lorem lectus id ornare. Rhoncus in egestas in amet porttitor pellentesque sit. Amet gravida integer velit felis. Eu consectetur interdum auctor sed aliquam. Eu pulvinar accumsan sed id. Duis a aliquam eu quisque commodo lectus. Lectus ipsum velit purus viverra vulputate viverra in nunc nulla. Euismod rhoncus mauris urna orci gravida sagittis netus. Amet mus in vel etiam. Interdum habitant congue massa in etiam sit. Commodo nibh viverra lobortis augue lorem quam lorem suspendisse.",
    },
];

export const riskData: IRiskAsset[] = [
    {
        id: "1",
        name: "Loremipsumdolorsit",
        ipAddress: "192.168.1.1",
        contextualRisk: "Critical",
    },
    {
        id: "2",
        name: "Loremipsumdolorsit002",
        ipAddress: "192.168.1.2",
        contextualRisk: "Critical",
    },
];

export const riskLevels: IRiskLevel[] = [
    {
        level: "Critical",
        count: 2,
        color: "#dc2626",
        bgColor: "bg-red-500",
        textColor: "text-gray-900",
    },
    {
        level: "High",
        count: 0,
        color: "#ea580c",
        bgColor: "bg-orange-500",
        textColor: "text-gray-500",
    },
    {
        level: "Medium",
        count: 0,
        color: "#d97706",
        bgColor: "bg-yellow-500",
        textColor: "text-gray-500",
    },
    {
        level: "Low",
        count: 0,
        color: "#16a34a",
        bgColor: "bg-green-500",
        textColor: "text-gray-500",
    },
];