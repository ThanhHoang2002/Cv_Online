Cách run project:
  1.  git clone:  https://github.com/ThanhHoang2002/Cv_Online.git
                  cd Cv_Online
  2.  Install dependencies: pnpm install
    * Tải pnpm của node > 18
    * Nếu bị liên quan đến quyền thì chạy lệnh này để mở quyền: Set-ExecutionPolicy -Scope LocalMachine -ExecutionPolicy RemoteSigned
  3. Copy .env.example to .env : cp .env.example .env
  4. Chạy Docker Compose: chạy lệnh: docker compose -f tools/compose/development.yml --env-file .env -p cv-online up -d
    * Cần tải về docker desktop
  5. Run project: 
     Mở terminal chạy : - pnpm prisma:migrate:dev
                        - pnpm dev


  
