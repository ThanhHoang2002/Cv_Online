/* eslint-disable lingui/text-restrictions */
/* eslint-disable lingui/no-unlocalized-strings */

import { t } from "@lingui/macro";
import { Quotes } from "@phosphor-icons/react";
import { cn } from "@reactive-resume/utils";
import { motion } from "framer-motion";
type Testimonial = {
  quote: string;
  name: string;
};

const testimonials: Testimonial[][] = [
  [
    {
      name: "Nguyễn Lan Nhi",
      quote:
        "Đây thực sự là lời cảm ơn dành cho CvOnline. Việc soạn thảo CV chưa bao giờ là thế mạnh của tôi, vì vậy ứng dụng của bạn đã làm cho quá trình này trở nên dễ dàng và mượt mà!",
    },
    {
      name: "Bùi Hải Sơn",
      quote:
        "Chào Amruth! Trước tiên, xin cảm ơn rất nhiều vì đã tạo ra CvOnline! Đây là một trong những công cụ tạo CV tốt nhất mà tôi từng tìm thấy. Tôi cũng đã giới thiệu nó cho nhiều bạn bè ở trường đại học...",
    },
    {
      name: "Lê Thùy Linh",
      quote:
        "Chào, tôi vừa tìm thấy công cụ tạo CV của bạn và chỉ muốn nói rằng, tôi thực sự đánh giá cao nó! Ngay khi thấy đây là một công cụ mã nguồn mở, tôi đã đóng tất cả các trang web tạo CV khác mà tôi đang xem xét. Cảm ơn bạn vì đã cung cấp dịch vụ này.",
    },
  ],
  [
    {
      name: "Trần Minh Hòa",
      quote:
        "Chào, tôi chỉ muốn cho bạn biết rằng bạn không chỉ giúp tôi tìm được việc làm, mà còn giúp bạn đời của tôi và một người bạn thời thơ ấu, người sau đó đã sử dụng trang web của bạn để giúp một người bạn khác tìm việc. Tôi đã tài trợ cho bạn trên Github để thể hiện sự cảm kích của mình, nhưng tôi muốn cho bạn biết bạn thực sự đã tạo ra sự khác biệt với công cụ tạo CV của mình.",
    },
    {
      name: "Phạm Quang Duy",
      quote:
        "Chào, tôi là một kỹ sư cơ khí, không biết nhiều về lập trình, AI lộn xộn và hệ thống máy tính, nhưng điều khiến tôi ở lại đây chính là sự sáng tạo của bạn. Trang web CvOnline của bạn thực sự tuyệt vời! Việc bạn nỗ lực giữ cho nó miễn phí thật đáng khâm phục. Tiếp tục làm những điều tuyệt vời nhé!",
    },
  ],
  [
    {
      name: "Vũ Thanh Tùng",
      quote:
        "Chào Amruth, tôi rất yêu thích trang web CvOnline của bạn. Cảm ơn rất nhiều vì đã tạo ra một công cụ như vậy.",
    },
    {
      name: "Đinh Ngọc An",
      quote:
        "Trước tiên, tôi đánh giá cao nỗ lực của bạn trong việc biến CvOnline trở thành một công cụ miễn phí cho cộng đồng. Nó tốt hơn rất nhiều so với nhiều công cụ tạo CV cao cấp...",
    },
    {
      name: "Hoàng Minh Châu",
      quote:
        "Chào anh, tôi chỉ muốn viết một lời cảm ơn vì đã phát triển CvOnline. Nó dễ sử dụng, trực quan và thực tế hơn rất nhiều so với những công cụ khác yêu cầu thanh toán sau khi bạn đã mất cả giờ để tạo CV. Tôi sẽ chắc chắn mua cho bạn một ly cà phê sau khi tôi có được công việc đầu tiên. Chúc anh mọi điều tốt đẹp trong cuộc sống!",
    },
  ],
];

export const TestimonialsSection = () => (
  <section id="testimonials" className="container relative space-y-12 py-24 sm:py-32">
    <div className="space-y-6 text-center">
      <h1 className="text-4xl font-bold">{t`Testimonials`}</h1>
    </div>

    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-y-0">
      {testimonials.map((columnGroup, groupIndex) => (
        <div key={groupIndex} className="space-y-8">
          {columnGroup.map((testimonial, index) => (
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0, transition: { delay: index * 0.25 } }}
              className={cn(
                "relative overflow-hidden rounded-lg bg-secondary-accent p-5 text-primary shadow-lg",
                index > 0 && "hidden lg:block",
              )}
            >
              <Quotes size={64} className="absolute -right-3 bottom-0 opacity-20" />
              <blockquote className="italic leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-3 font-medium">{testimonial.name}</figcaption>
            </motion.figure>
          ))}
        </div>
      ))}
    </div>
  </section>
);
